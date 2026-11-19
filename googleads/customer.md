# Customer

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Queried with GAQL (`FROM customer`) through `GoogleAdsService.Search`/`SearchStream`; there are no dedicated REST methods. Field reference page: https://developers.google.com/google-ads/api/fields/v26/customer

---

## Schemas

### `Customer`

A customer.

| Field | Type | Description |
|---|---|---|
| containsEuPoliticalAdvertising | string enum(UNSPECIFIED, UNKNOWN, CONTAINS_EU_POLITICAL_ADVERTISING, DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING) | Output only. Returns the advertiser self-declaration status of whether this customer contains political advertising content targeted towards the European Union. You can use the Google Ads UI to update this account-level declaration, or use the API to update the self-declaration status of individual campaigns. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CONTAINS_EU_POLITICAL_ADVERTISING - The campaign contains political advertising targeted towards the EU. The campaign will be restricted from serving ads in the EU.; DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING - The campaign does not contain political advertising targeted towards the EU. No additional serving restrictions will apply. |
| imageAssetAutoMigrationDoneDateTime | string | Output only. Timestamp of migration from feed based image to asset base image in yyyy-MM-dd HH:mm:ss format. |
| autoTaggingEnabled | boolean | Whether auto-tagging is enabled for the customer. Only mutable in an `update` operation. |
| optimizationScoreWeight | number (double) | Output only. Optimization score weight of the customer. Optimization score weight can be used to compare/aggregate optimization scores across multiple non-manager customers. The aggregate optimization score of a manager is computed as the sum over all of their customers of `Customer.optimization_score * Customer.optimization_score_weight`. This field is 0 for all manager customers, and for unscored non-manager customers. This field is read-only. |
| timeZone | string | Immutable. The local timezone ID of the customer. |
| conversionTrackingSetting | `ConversionTrackingSetting` | Conversion tracking setting for a customer. |
| trackingUrlTemplate | string | The URL template for constructing a tracking URL out of parameters. Only mutable in an `update` operation. |
| resourceName | string | Immutable. The resource name of the customer. Customer resource names have the form: `customers/{customer_id}` |
| status | string enum(UNSPECIFIED, UNKNOWN, ENABLED, CANCELED, SUSPENDED, CLOSED) | Output only. The status of the customer. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ENABLED - Indicates an active account able to serve ads.; CANCELED - Indicates a canceled account unable to serve ads. Can be reactivated by an admin user.; SUSPENDED - Indicates a suspended account unable to serve ads. May only be activated by Google support.; CLOSED - Indicates a closed account unable to serve ads. Test account will also have CLOSED status. Status is permanent and may not be reopened. |
| payPerConversionEligibilityFailureReasons | array<string enum(UNSPECIFIED, UNKNOWN, NOT_ENOUGH_CONVERSIONS, CONVERSION_LAG_TOO_HIGH, HAS_CAMPAIGN_WITH_SHARED_BUDGET, HAS_UPLOAD_CLICKS_CONVERSION, AVERAGE_DAILY_SPEND_TOO_HIGH, ANALYSIS_NOT_COMPLETE, OTHER)> | Output only. Reasons why the customer is not eligible to use PaymentMode.CONVERSIONS. If the list is empty, the customer is eligible. This field is read-only. |
| id | string (int64) | Output only. The ID of the customer. |
| videoBrandSafetySuitability | string enum(UNSPECIFIED, UNKNOWN, EXPANDED_INVENTORY, STANDARD_INVENTORY, LIMITED_INVENTORY) | Brand Safety setting at the account level. Allows for selecting an inventory type to show your ads on content that is the right fit for your brand. See https://support.google.com/google-ads/answer/7515513. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; EXPANDED_INVENTORY - This option lets you show ads across all inventory on YouTube and video partners that meet our standards for monetization. This option may be an appropriate choice for brands that want maximum access to the full breadth of videos eligible for ads, including, for example, videos that have strong profanity in the context of comedy or a documentary, or excessive violence as featured in video games.; STANDARD_INVENTORY - This option lets you show ads across a wide range of content that's appropriate for most brands, such as popular music videos, documentaries, and movie trailers. The content you can show ads on is based on YouTube's advertiser-friendly content guidelines that take into account, for example, the strength or frequency of profanity, or the appropriateness of subject matter like sensitive events. Ads won't show, for example, on content with repeated strong profanity, strong sexual content, or graphic violence.; LIMITED_INVENTORY - This option lets you show ads on a reduced range of content that's appropriate for brands with particularly strict guidelines around inappropriate language and sexual suggestiveness; above and beyond what YouTube's advertiser-friendly content guidelines address. The videos accessible in this sensitive category meet heightened requirements, especially for inappropriate language and sexual suggestiveness. For example, your ads will be excluded from showing on some of YouTube's most popular music videos and other pop culture content across YouTube and Google video partners. |
| manager | boolean | Output only. Whether the customer is a manager. |
| hasPartnersBadge | boolean | Output only. Whether the Customer has a Partners program badge. If the Customer is not associated with the Partners program, this will be false. For more information, see https://support.google.com/partners/answer/3125774. |
| currencyCode | string | Immutable. The currency in which the account operates. A subset of the currency codes from the ISO 4217 standard is supported. |
| remarketingSetting | `RemarketingSetting` | Output only. Remarketing setting for a customer. |
| customerAgreementSetting | `CustomerAgreementSetting` | Output only. Customer Agreement Setting for a customer. |
| testAccount | boolean | Output only. Whether the customer is a test account. |
| optimizationScore | number (double) | Output only. Optimization score of the customer. Optimization score is an estimate of how well a customer's campaigns are set to perform. It ranges from 0% (0.0) to 100% (1.0). This field is null for all manager customers, and for unscored non-manager customers. See "About optimization score" at https://support.google.com/google-ads/answer/9061546. This field is read-only. |
| videoCustomer | `VideoCustomer` | Video specific information about a Customer. |
| descriptiveName | string | Optional, non-unique descriptive name of the customer. |
| finalUrlSuffix | string | The URL template for appending params to the final URL. Only mutable in an `update` operation. |
| locationAssetAutoMigrationDoneDateTime | string | Output only. Timestamp of migration from feed based location to asset base location in yyyy-MM-dd HH:mm:ss format. |
| callReportingSetting | `CallReportingSetting` | Call reporting setting for a customer. Only mutable in an `update` operation. |
| localServicesSettings | `LocalServicesSettings` | Settings for Local Services customer. |
| locationAssetAutoMigrationDone | boolean | Output only. True if feed based location has been migrated to asset based location. |
| imageAssetAutoMigrationDone | boolean | Output only. True if feed based image has been migrated to asset based image. |

### `CallReportingSetting`

Call reporting setting for a customer. Only mutable in an `update` operation.

| Field | Type | Description |
|---|---|---|
| callConversionAction | string | Customer-level call conversion action to attribute a call conversion to. If not set a default conversion action is used. Only in effect when call_conversion_reporting_enabled is set to true. |
| callConversionReportingEnabled | boolean | Whether to enable call conversion reporting. |
| callReportingEnabled | boolean | Enable reporting of phone call events by redirecting them through Google System. |

### `ConversionTrackingSetting`

A collection of customer-wide settings related to Google Ads Conversion Tracking.

| Field | Type | Description |
|---|---|---|
| effectiveEnablementSetting | string enum(UNSPECIFIED, UNKNOWN, OFF, ON) | Output only. The effective account-level enhanced conversions setting for the customer. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; OFF - Customer explicitly turned off Enhanced Conversions.; ON - Customer explicitly turned on Enhanced Conversions. |
| enablementSetting | string enum(UNSPECIFIED, UNKNOWN, OFF, ON) | Output only. Account-level setting indicating whether enhanced conversions is enabled for the customer. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; OFF - Customer explicitly turned off Enhanced Conversions.; ON - Customer explicitly turned on Enhanced Conversions. |
| conversionTrackingId | string (int64) | Output only. The conversion tracking id used for this account. This id doesn't indicate whether the customer uses conversion tracking (conversion_tracking_status does). This field is read-only. |
| crossAccountConversionTrackingId | string (int64) | Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into cross account conversion tracking, and it overrides conversion_tracking_id. This field can only be managed through the Google Ads UI. This field is read-only. |
| googleAdsConversionCustomer | string | The resource name of the customer where conversions are created and managed. This field is read-only. |
| conversionTrackingStatus | string enum(UNSPECIFIED, UNKNOWN, NOT_CONVERSION_TRACKED, CONVERSION_TRACKING_MANAGED_BY_SELF, CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER, CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER) | Output only. Conversion tracking status. It indicates whether the customer is using conversion tracking, and who is the conversion tracking owner of this customer. If this customer is using cross-account conversion tracking, the value returned will differ based on the `login-customer-id` of the request. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; NOT_CONVERSION_TRACKED - Customer does not use any conversion tracking.; CONVERSION_TRACKING_MANAGED_BY_SELF - The conversion actions are created and managed by this customer.; CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER - The conversion actions are created and managed by the manager specified in the request's `login-customer-id`.; CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER - The conversion actions are created and managed by a manager different from the customer or manager specified in the request's `login-customer-id`. |
| acceptedCustomerDataTerms | boolean | Output only. Whether the customer has accepted customer data terms. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. For more information, see https://support.google.com/adspolicy/answer/7475709. |

### `CustomerAgreementSetting`

Customer Agreement Setting for a customer.

| Field | Type | Description |
|---|---|---|
| acceptedLeadFormTerms | boolean | Output only. Whether the customer has accepted lead form term of service. |

### `LocalServicesSettings`

Settings for Local Services customer.

| Field | Type | Description |
|---|---|---|
| granularLicenseStatuses | array<`GranularLicenseStatus`> | Output only. A read-only list of geo vertical level license statuses. |
| granularInsuranceStatuses | array<`GranularInsuranceStatus`> | Output only. A read-only list of geo vertical level insurance statuses. |
| redemptionProviderInfo | `RedemptionProviderInfo` | Settings for external redemption provider integration. |

### `RemarketingSetting`

Remarketing setting for a customer.

| Field | Type | Description |
|---|---|---|
| googleGlobalSiteTag | string | Output only. The Google tag. |

### `VideoCustomer`

Video specific information about a Customer.

| Field | Type | Description |
|---|---|---|
| thirdPartyIntegrationPartners | `CustomerThirdPartyIntegrationPartners` | Third Party integration partners. |

### `GranularInsuranceStatus`

Insurance status at geo + vertical level.

| Field | Type | Description |
|---|---|---|
| categoryId | string | Output only. Service category associated with the status. For example, xcat:service_area_business_plumber. For more details see: https://developers.google.com/google-ads/api/data/codes-formats#local_services_ids |
| verificationStatus | string enum(UNSPECIFIED, UNKNOWN, NEEDS_REVIEW, FAILED, PASSED, NOT_APPLICABLE, NO_SUBMISSION, PARTIAL_SUBMISSION, PENDING_ESCALATION) | Output only. Granular insurance status, per geo + vertical. Values: UNSPECIFIED - Not specified.; UNKNOWN - Unknown verification status.; NEEDS_REVIEW - Verification has started, but has not finished.; FAILED - Verification has failed.; PASSED - Verification has passed.; NOT_APPLICABLE - Verification is not applicable.; NO_SUBMISSION - Verification is required but pending submission.; PARTIAL_SUBMISSION - Not all required verification has been submitted.; PENDING_ESCALATION - Verification needs review by Local Services Ads Ops Specialist. |
| geoCriterionId | string (int64) | Output only. Geotarget criterion ID associated with the status. Can be on country or state/province geo level, depending on requirements and location. See https://developers.google.com/google-ads/api/data/geotargets for more information. |

### `GranularLicenseStatus`

License status at geo + vertical level.

| Field | Type | Description |
|---|---|---|
| verificationStatus | string enum(UNSPECIFIED, UNKNOWN, NEEDS_REVIEW, FAILED, PASSED, NOT_APPLICABLE, NO_SUBMISSION, PARTIAL_SUBMISSION, PENDING_ESCALATION) | Output only. Granular license status, per geo + vertical. Values: UNSPECIFIED - Not specified.; UNKNOWN - Unknown verification status.; NEEDS_REVIEW - Verification has started, but has not finished.; FAILED - Verification has failed.; PASSED - Verification has passed.; NOT_APPLICABLE - Verification is not applicable.; NO_SUBMISSION - Verification is required but pending submission.; PARTIAL_SUBMISSION - Not all required verification has been submitted.; PENDING_ESCALATION - Verification needs review by Local Services Ads Ops Specialist. |
| geoCriterionId | string (int64) | Output only. Geotarget criterion ID associated with the status. Can be on country or state/province geo level, depending on requirements and location. See https://developers.google.com/google-ads/api/data/geotargets for more information. |
| categoryId | string | Output only. Service category associated with the status. For example, xcat:service_area_business_plumber. For more details see: https://developers.google.com/google-ads/api/data/codes-formats#local_services_ids |

### `RedemptionProviderInfo`

Information about the external redemption provider for a Local Services customer.

| Field | Type | Description |
|---|---|---|
| externalMerchantId | `ExternalPartnerMerchantId` | Required. Identifier for a merchant in an external partner's point-of-sale system. |

### `CustomerThirdPartyIntegrationPartners`

Container for Customer level third party integration partners.

| Field | Type | Description |
|---|---|---|
| viewabilityIntegrationPartners | array<`CustomerThirdPartyViewabilityIntegrationPartner`> | Allowed third party integration partners for YouTube viewability verification. |
| brandSafetyIntegrationPartners | array<`CustomerThirdPartyBrandSafetyIntegrationPartner`> | Allowed third party integration partners for brand safety verification. |
| reachIntegrationPartners | array<`CustomerThirdPartyReachIntegrationPartner`> | Allowed third party integration partners for reach verification. |
| conversionAttributionIntegrationPartners | array<`CustomerThirdPartyConversionAttributionIntegrationPartner`> | Allowed third party integration partners for YouTube conversion attribution verification. |
| brandLiftIntegrationPartners | array<`CustomerThirdPartyBrandLiftIntegrationPartner`> | Allowed third party integration partners for Brand Lift verification. |

### `ExternalPartnerMerchantId`

Identifier for a merchant in an external partner's point-of-sale system.

| Field | Type | Description |
|---|---|---|
| alphanumericId | string | Alphanumeric or string merchant identifier in the external partner's system. The length of this string must be between 1 and 50, inclusive. |
| numericId | string (int64) | Numeric merchant identifier in the external partner's system. |

### `CustomerThirdPartyBrandLiftIntegrationPartner`

Container for third party Brand Lift integration data for Customer.

| Field | Type | Description |
|---|---|---|
| allowShareCost | boolean | If true, cost data can be shared with this vendor. |
| brandLiftIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, KANTAR_MILLWARD_BROWN, DYNATA, INTAGE, MACROMILL) | Allowed Third Party integration partners for Brand Lift verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; KANTAR_MILLWARD_BROWN - Kantar; DYNATA - Dynata; INTAGE - Intage; MACROMILL - Macromill |

### `CustomerThirdPartyBrandSafetyIntegrationPartner`

Container for third party brand safety integration data for Customer.

| Field | Type | Description |
|---|---|---|
| brandSafetyIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, DOUBLE_VERIFY, INTEGRAL_AD_SCIENCE, ZEFR) | Allowed third party integration partners for brand safety verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; DOUBLE_VERIFY - DoubleVerify.; INTEGRAL_AD_SCIENCE - Integral Ad Science.; ZEFR - Zefr. |

### `CustomerThirdPartyConversionAttributionIntegrationPartner`

Container for third party YouTube conversion attribution integration data for Customer.

| Field | Type | Description |
|---|---|---|
| conversionAttributionIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, TRANSUNION) | Allowed third party integration partners for YouTube conversion attribution verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; TRANSUNION - Transunion. |

### `CustomerThirdPartyReachIntegrationPartner`

Container for third party reach integration data for Customer.

| Field | Type | Description |
|---|---|---|
| reachIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, NIELSEN, COMSCORE, KANTAR_MILLWARD_BROWN, VIDEO_RESEARCH, GEMIUS, MEDIA_SCOPE, AUDIENCE_PROJECT, VIDEO_AMP, ISPOT_TV) | Allowed Third Party integration partners for reach verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; NIELSEN - Nielsen.; COMSCORE - Comscore.; KANTAR_MILLWARD_BROWN - Kantar.; VIDEO_RESEARCH - Video Research.; GEMIUS - Gemius.; MEDIA_SCOPE - MediaScope.; AUDIENCE_PROJECT - AudienceProject; VIDEO_AMP - VideoAmp; ISPOT_TV - iSpot.tv |
| allowShareCost | boolean | If true, cost data can be shared with this vendor. |

### `CustomerThirdPartyViewabilityIntegrationPartner`

Container for third party viewability integration data for Customer.

| Field | Type | Description |
|---|---|---|
| viewabilityIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, DOUBLE_VERIFY, INTEGRAL_AD_SCIENCE, ZEFR) | Allowed third party integration partners for YouTube viewability verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; DOUBLE_VERIFY - DoubleVerify.; INTEGRAL_AD_SCIENCE - Integral Ad Science.; ZEFR - Zefr. |
| allowShareCost | boolean | If true, cost data can be shared with this vendor. |

---

## Field reference (verbatim from the Google field reference page)

[Help me build a query](https://developers.google.com/google-ads/api/fields/v26/customer_query_builder.md.txt) [Proto definition ![on GitHub](https://developers.google.com/site-assets/logo-github.svg)](https://github.com/googleapis/googleapis/blob/master/google/ads/googleads/v26/resources/customer.proto)

A customer.

#### Fields, segments, and metrics

This page shows all metrics and segments that can be put in the same `SELECT` clause as the fields of `customer`.
However, when you specify `customer` in the `FROM` clause, some metrics and segments
cannot be used.
Use the following filter to show only the fields that can be used when `customer` is specified in the `FROM` clause.

Is `customer` specified in the `FROM` clause of your query?
No Yes, it is

| Resource fields |
|---|
| auto_tagging_enabled |
| call_reporting_setting.call_conversion_action |
| call_reporting_setting.call_conversion_reporting_enabled |
| call_reporting_setting.call_reporting_enabled |
| contains_eu_political_advertising |
| conversion_tracking_setting.accepted_customer_data_terms |
| conversion_tracking_setting.conversion_tracking_id |
| conversion_tracking_setting.conversion_tracking_status |
| conversion_tracking_setting.cross_account_conversion_tracking_id |
| conversion_tracking_setting.effective_enablement_setting |
| conversion_tracking_setting.enablement_setting |
| conversion_tracking_setting.google_ads_conversion_customer |
| currency_code |
| customer_agreement_setting.accepted_lead_form_terms |
| descriptive_name |
| final_url_suffix |
| has_partners_badge |
| id |
| image_asset_auto_migration_done |
| image_asset_auto_migration_done_date_time |
| local_services_settings.granular_insurance_statuses |
| local_services_settings.granular_license_statuses |
| local_services_settings.redemption_provider_info.external_merchant_id.alphanumeric_id |
| local_services_settings.redemption_provider_info.external_merchant_id.numeric_id |
| location_asset_auto_migration_done |
| location_asset_auto_migration_done_date_time |
| manager |
| optimization_score |
| optimization_score_weight |
| pay_per_conversion_eligibility_failure_reasons |
| remarketing_setting.google_global_site_tag |
| resource_name |
| status |
| test_account |
| time_zone |
| tracking_url_template |
| video_brand_safety_suitability |
| video_customer.third_party_integration_partners.brand_lift_integration_partners |
| video_customer.third_party_integration_partners.brand_safety_integration_partners |
| video_customer.third_party_integration_partners.conversion_attribution_integration_partners |
| video_customer.third_party_integration_partners.reach_integration_partners |
| video_customer.third_party_integration_partners.viewability_integration_partners |

| Segments |
|---|
| ad_format_type |
| ad_network_type |
| ad_sub_format_type |
| ad_sub_network_type |
| ad_using_product_data |
| ad_using_video |
| adjusted_age_range |
| adjusted_gender |
| advance_booking_window |
| auction_insight_domain |
| click_type |
| conversion_action |
| conversion_action_category |
| conversion_action_name |
| conversion_adjustment |
| conversion_attribution_event_type |
| conversion_lag_bucket |
| conversion_or_adjustment_lag_bucket |
| conversion_value_rule_primary_dimension |
| date |
| day_of_week |
| device |
| external_conversion_source |
| geo_target_airport |
| geo_target_city |
| geo_target_country |
| geo_target_metro |
| geo_target_region |
| hour |
| length_of_booking |
| mobile_device_platform |
| month |
| month_of_year |
| new_versus_returning_customers |
| product_aggregator_id |
| product_brand |
| product_category_level1 |
| product_category_level2 |
| product_category_level3 |
| product_category_level4 |
| product_category_level5 |
| product_channel |
| product_channel_exclusivity |
| product_condition |
| product_country |
| product_custom_attribute0 |
| product_custom_attribute1 |
| product_custom_attribute2 |
| product_custom_attribute3 |
| product_custom_attribute4 |
| product_item_id |
| product_language |
| product_merchant_id |
| product_store_id |
| product_title |
| product_type_l1 |
| product_type_l2 |
| product_type_l3 |
| product_type_l4 |
| product_type_l5 |
| quarter |
| recommendation_type |
| search_engine_results_page_type |
| sk_ad_network_ad_event_type |
| sk_ad_network_attribution_credit |
| sk_ad_network_coarse_conversion_value |
| sk_ad_network_fine_conversion_value |
| sk_ad_network_postback_sequence_index |
| sk_ad_network_redistributed_fine_conversion_value |
| sk_ad_network_source_app.sk_ad_network_source_app_id |
| sk_ad_network_source_domain |
| sk_ad_network_source_type |
| sk_ad_network_user_type |
| sk_ad_network_version |
| slot |
| start_date |
| start_day_of_week |
| user_set_dates |
| vertical_ads_event_participant_display_names |
| vertical_ads_hotel_class |
| vertical_ads_listing |
| vertical_ads_listing_brand |
| vertical_ads_listing_city |
| vertical_ads_listing_country |
| vertical_ads_listing_region |
| vertical_ads_listing_user_rating |
| vertical_ads_listing_venue |
| vertical_ads_partner_account |
| vertical_ads_price_tier |
| vertical_ads_rate_rule_id |
| vertical_ads_rate_type |
| vertical_ads_vertical |
| week |
| year |

| Metrics |
|---|
| absolute_top_impression_percentage |
| active_view_audibility_invalid_givt_measurable_impressions_rate |
| active_view_audibility_invalid_measurable_impressions_rate |
| active_view_audibility_measurable_impressions |
| active_view_audibility_measurable_impressions_rate |
| active_view_audible_impressions |
| active_view_audible_impressions_rate |
| active_view_audible_quartile_p100_rate |
| active_view_audible_quartile_p25_rate |
| active_view_audible_quartile_p50_rate |
| active_view_audible_quartile_p75_rate |
| active_view_audible_thirty_seconds_impressions |
| active_view_audible_thirty_seconds_impressions_rate |
| active_view_audible_two_seconds_impressions |
| active_view_audible_two_seconds_impressions_rate |
| active_view_cpm |
| active_view_ctr |
| active_view_impressions |
| active_view_measurability |
| active_view_measurable_cost_micros |
| active_view_measurable_impressions |
| active_view_viewability |
| all_average_cart_size |
| all_average_order_value_micros |
| all_conversions |
| all_conversions_by_conversion_date |
| all_conversions_from_click_to_call |
| all_conversions_from_directions |
| all_conversions_from_interactions_rate |
| all_conversions_from_interactions_value_per_interaction |
| all_conversions_from_location_asset_click_to_call |
| all_conversions_from_location_asset_directions |
| all_conversions_from_location_asset_menu |
| all_conversions_from_location_asset_order |
| all_conversions_from_location_asset_other_engagement |
| all_conversions_from_location_asset_store_visits |
| all_conversions_from_location_asset_website |
| all_conversions_from_menu |
| all_conversions_from_order |
| all_conversions_from_other_engagement |
| all_conversions_from_store_visit |
| all_conversions_from_store_website |
| all_conversions_value |
| all_conversions_value_by_conversion_date |
| all_conversions_value_per_cost |
| all_cost_of_goods_sold_micros |
| all_cross_sell_cost_of_goods_sold_micros |
| all_cross_sell_gross_profit_micros |
| all_cross_sell_revenue_micros |
| all_cross_sell_units_sold |
| all_gross_profit_margin |
| all_gross_profit_micros |
| all_lead_cost_of_goods_sold_micros |
| all_lead_gross_profit_micros |
| all_lead_revenue_micros |
| all_lead_units_sold |
| all_new_customer_lifetime_value |
| all_orders |
| all_revenue_micros |
| all_units_sold |
| auction_insight_search_absolute_top_impression_percentage |
| auction_insight_search_impression_share |
| auction_insight_search_outranking_share |
| auction_insight_search_overlap_rate |
| auction_insight_search_position_above_rate |
| auction_insight_search_top_impression_percentage |
| average_cart_size |
| average_cost |
| average_cpc |
| average_cpe |
| average_cpm |
| average_order_value_micros |
| average_page_views |
| average_time_on_site |
| average_video_watch_time_duration_millis |
| benchmark_average_max_cpc |
| biddable_app_install_conversions |
| biddable_app_post_install_conversions |
| biddable_cohort_app_post_install_conversions |
| biddable_indirect_install_first_in_app_conversion_micros |
| bounce_rate |
| clicks |
| clicks_unique_query_clusters |
| content_budget_lost_impression_share |
| content_impression_share |
| content_rank_lost_impression_share |
| conversion_last_conversion_date |
| conversion_last_received_request_date_time |
| conversions |
| conversions_by_conversion_date |
| conversions_from_interactions_rate |
| conversions_from_interactions_value_per_interaction |
| conversions_unique_query_clusters |
| conversions_value |
| conversions_value_by_conversion_date |
| conversions_value_per_cost |
| cost_converted_currency_per_platform_comparable_conversion |
| cost_micros |
| cost_of_goods_sold_micros |
| cost_per_all_conversions |
| cost_per_conversion |
| cost_per_current_model_attributed_conversion |
| cost_per_platform_comparable_conversion |
| cross_device_conversions |
| cross_device_conversions_by_conversion_date |
| cross_device_conversions_value_by_conversion_date |
| cross_device_conversions_value_micros |
| cross_sell_cost_of_goods_sold_micros |
| cross_sell_gross_profit_micros |
| cross_sell_revenue_micros |
| cross_sell_units_sold |
| ctr |
| current_model_attributed_conversions |
| current_model_attributed_conversions_from_interactions_rate |
| current_model_attributed_conversions_from_interactions_value_per_interaction |
| current_model_attributed_conversions_value |
| current_model_attributed_conversions_value_per_cost |
| eligible_impressions_from_location_asset_store_reach |
| engagement_rate |
| engagements |
| general_invalid_click_rate |
| general_invalid_clicks |
| gmail_forwards |
| gmail_saves |
| gmail_secondary_clicks |
| gross_profit_margin |
| gross_profit_micros |
| historical_creative_quality_score |
| historical_landing_page_quality_score |
| historical_quality_score |
| historical_search_predicted_ctr |
| impressions |
| impressions_unique_query_clusters |
| interaction_event_types |
| interaction_rate |
| interactions |
| invalid_click_rate |
| invalid_clicks |
| lead_cost_of_goods_sold_micros |
| lead_gross_profit_micros |
| lead_revenue_micros |
| lead_units_sold |
| new_customer_lifetime_value |
| optimization_score_uplift |
| optimization_score_url |
| orders |
| original_conversion_value |
| percent_new_visitors |
| phone_calls |
| phone_impressions |
| phone_through_rate |
| platform_comparable_conversions |
| platform_comparable_conversions_by_conversion_date |
| platform_comparable_conversions_from_interactions_rate |
| platform_comparable_conversions_from_interactions_value_per_interaction |
| platform_comparable_conversions_value |
| platform_comparable_conversions_value_by_conversion_date |
| platform_comparable_conversions_value_per_cost |
| primary_impressions |
| relative_ctr |
| revenue_micros |
| search_absolute_top_impression_share |
| search_budget_lost_absolute_top_impression_share |
| search_budget_lost_impression_share |
| search_budget_lost_top_impression_share |
| search_click_share |
| search_exact_match_impression_share |
| search_impression_share |
| search_rank_lost_absolute_top_impression_share |
| search_rank_lost_impression_share |
| search_rank_lost_top_impression_share |
| search_top_impression_share |
| sk_ad_network_installs |
| sk_ad_network_total_conversions |
| svr |
| top_impression_percentage |
| trueview_average_cpv |
| unique_users |
| unique_users_eight_plus |
| unique_users_eight_plus_info |
| unique_users_five_plus |
| unique_users_five_plus_info |
| unique_users_four_plus |
| unique_users_four_plus_info |
| unique_users_info |
| unique_users_nine_plus |
| unique_users_nine_plus_info |
| unique_users_seven_plus |
| unique_users_seven_plus_info |
| unique_users_six_plus |
| unique_users_six_plus_info |
| unique_users_ten_plus |
| unique_users_ten_plus_info |
| unique_users_three_plus |
| unique_users_three_plus_info |
| unique_users_two_plus |
| unique_users_two_plus_info |
| units_sold |
| value_per_all_conversions |
| value_per_all_conversions_by_conversion_date |
| value_per_conversion |
| value_per_conversions_by_conversion_date |
| value_per_current_model_attributed_conversion |
| value_per_platform_comparable_conversion |
| value_per_platform_comparable_conversions_by_conversion_date |
| vertical_ads_average_booking_value_micros |
| vertical_ads_potential_impressions |
| vertical_ads_price_difference_percentage |
| video_quartile_p100_rate |
| video_quartile_p25_rate |
| video_quartile_p50_rate |
| video_quartile_p75_rate |
| video_trueview_view_rate |
| video_trueview_view_rate_in_feed |
| video_trueview_view_rate_in_stream |
| video_trueview_view_rate_shorts |
| video_trueview_views |
| video_watch_time_duration_millis |
| view_through_conversions |
| view_through_conversions_from_location_asset_click_to_call |
| view_through_conversions_from_location_asset_directions |
| view_through_conversions_from_location_asset_menu |
| view_through_conversions_from_location_asset_order |
| view_through_conversions_from_location_asset_other_engagement |
| view_through_conversions_from_location_asset_store_visits |
| view_through_conversions_from_location_asset_website |
| youtube_comments |
| youtube_likes |
| youtube_shares |

## customer.auto_tagging_enabled

Field descriptionWhether auto-tagging is enabled for the customer.
Only mutable in an `update` operation.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [accessible_bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/accessible_bidding_strategy.md.txt), [account_budget](https://developers.google.com/google-ads/api/fields/v26/account_budget.md.txt), [account_budget_proposal](https://developers.google.com/google-ads/api/fields/v26/account_budget_proposal.md.txt), [account_link](https://developers.google.com/google-ads/api/fields/v26/account_link.md.txt), [ad](https://developers.google.com/google-ads/api/fields/v26/ad.md.txt), [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_combination_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_combination_view.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_ad_label](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_label.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_asset_set](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset_set.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [ad_group_bid_modifier](https://developers.google.com/google-ads/api/fields/v26/ad_group_bid_modifier.md.txt), [ad_group_criterion](https://developers.google.com/google-ads/api/fields/v26/ad_group_criterion.md.txt), [ad_group_criterion_customizer](https://developers.google.com/google-ads/api/fields/v26/ad_group_criterion_customizer.md.txt), [ad_group_criterion_label](https://developers.google.com/google-ads/api/fields/v26/ad_group_criterion_label.md.txt), [ad_group_criterion_simulation](https://developers.google.com/google-ads/api/fields/v26/ad_group_criterion_simulation.md.txt), [ad_group_customizer](https://developers.google.com/google-ads/api/fields/v26/ad_group_customizer.md.txt), [ad_group_label](https://developers.google.com/google-ads/api/fields/v26/ad_group_label.md.txt), [ad_group_simulation](https://developers.google.com/google-ads/api/fields/v26/ad_group_simulation.md.txt), [ad_parameter](https://developers.google.com/google-ads/api/fields/v26/ad_parameter.md.txt), [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [android_privacy_shared_key_google_ad_group](https://developers.google.com/google-ads/api/fields/v26/android_privacy_shared_key_google_ad_group.md.txt), [android_privacy_shared_key_google_campaign](https://developers.google.com/google-ads/api/fields/v26/android_privacy_shared_key_google_campaign.md.txt), [android_privacy_shared_key_google_network_type](https://developers.google.com/google-ads/api/fields/v26/android_privacy_shared_key_google_network_type.md.txt), [app_top_combination_view](https://developers.google.com/google-ads/api/fields/v26/app_top_combination_view.md.txt), [applied_incentive](https://developers.google.com/google-ads/api/fields/v26/applied_incentive.md.txt), [asset](https://developers.google.com/google-ads/api/fields/v26/asset.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_listing_group_filter](https://developers.google.com/google-ads/api/fields/v26/asset_group_listing_group_filter.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_group_signal](https://developers.google.com/google-ads/api/fields/v26/asset_group_signal.md.txt), [asset_group_top_combination_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_top_combination_view.md.txt), [asset_set](https://developers.google.com/google-ads/api/fields/v26/asset_set.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [audience](https://developers.google.com/google-ads/api/fields/v26/audience.md.txt), [batch_job](https://developers.google.com/google-ads/api/fields/v26/batch_job.md.txt), [bidding_data_exclusion](https://developers.google.com/google-ads/api/fields/v26/bidding_data_exclusion.md.txt), [bidding_seasonality_adjustment](https://developers.google.com/google-ads/api/fields/v26/bidding_seasonality_adjustment.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [bidding_strategy_simulation](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy_simulation.md.txt), [billing_setup](https://developers.google.com/google-ads/api/fields/v26/billing_setup.md.txt), [call_view](https://developers.google.com/google-ads/api/fields/v26/call_view.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_asset_set](https://developers.google.com/google-ads/api/fields/v26/campaign_asset_set.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_bid_modifier](https://developers.google.com/google-ads/api/fields/v26/campaign_bid_modifier.md.txt), [campaign_budget](https://developers.google.com/google-ads/api/fields/v26/campaign_budget.md.txt), [campaign_conversion_goal](https://developers.google.com/google-ads/api/fields/v26/campaign_conversion_goal.md.txt), [campaign_criterion](https://developers.google.com/google-ads/api/fields/v26/campaign_criterion.md.txt), [campaign_customizer](https://developers.google.com/google-ads/api/fields/v26/campaign_customizer.md.txt), [campaign_draft](https://developers.google.com/google-ads/api/fields/v26/campaign_draft.md.txt), [campaign_goal_config](https://developers.google.com/google-ads/api/fields/v26/campaign_goal_config.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [campaign_label](https://developers.google.com/google-ads/api/fields/v26/campaign_label.md.txt), [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [campaign_shared_set](https://developers.google.com/google-ads/api/fields/v26/campaign_shared_set.md.txt), [campaign_simulation](https://developers.google.com/google-ads/api/fields/v26/campaign_simulation.md.txt), [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), [change_event](https://developers.google.com/google-ads/api/fields/v26/change_event.md.txt), [change_status](https://developers.google.com/google-ads/api/fields/v26/change_status.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [combined_audience](https://developers.google.com/google-ads/api/fields/v26/combined_audience.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [conversion_custom_variable](https://developers.google.com/google-ads/api/fields/v26/conversion_custom_variable.md.txt), [conversion_goal_campaign_config](https://developers.google.com/google-ads/api/fields/v26/conversion_goal_campaign_config.md.txt), [conversion_value_rule](https://developers.google.com/google-ads/api/fields/v26/conversion_value_rule.md.txt), [conversion_value_rule_set](https://developers.google.com/google-ads/api/fields/v26/conversion_value_rule_set.md.txt), [custom_audience](https://developers.google.com/google-ads/api/fields/v26/custom_audience.md.txt), [custom_conversion_goal](https://developers.google.com/google-ads/api/fields/v26/custom_conversion_goal.md.txt), [custom_interest](https://developers.google.com/google-ads/api/fields/v26/custom_interest.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [customer_asset_set](https://developers.google.com/google-ads/api/fields/v26/customer_asset_set.md.txt), [customer_budget_network_setting](https://developers.google.com/google-ads/api/fields/v26/customer_budget_network_setting.md.txt), [customer_client](https://developers.google.com/google-ads/api/fields/v26/customer_client.md.txt), [customer_client_link](https://developers.google.com/google-ads/api/fields/v26/customer_client_link.md.txt), [customer_conversion_goal](https://developers.google.com/google-ads/api/fields/v26/customer_conversion_goal.md.txt), [customer_customizer](https://developers.google.com/google-ads/api/fields/v26/customer_customizer.md.txt), [customer_label](https://developers.google.com/google-ads/api/fields/v26/customer_label.md.txt), [customer_manager_link](https://developers.google.com/google-ads/api/fields/v26/customer_manager_link.md.txt), [customer_negative_criterion](https://developers.google.com/google-ads/api/fields/v26/customer_negative_criterion.md.txt), [customer_user_access](https://developers.google.com/google-ads/api/fields/v26/customer_user_access.md.txt), [customer_user_access_invitation](https://developers.google.com/google-ads/api/fields/v26/customer_user_access_invitation.md.txt), [customizer_attribute](https://developers.google.com/google-ads/api/fields/v26/customizer_attribute.md.txt), [data_link](https://developers.google.com/google-ads/api/fields/v26/data_link.md.txt), [detail_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_content_suitability_placement_view.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [detailed_demographic](https://developers.google.com/google-ads/api/fields/v26/detailed_demographic.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [domain_category](https://developers.google.com/google-ads/api/fields/v26/domain_category.md.txt), [dynamic_search_ads_search_term_view](https://developers.google.com/google-ads/api/fields/v26/dynamic_search_ads_search_term_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), [experiment_arm](https://developers.google.com/google-ads/api/fields/v26/experiment_arm.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [goal](https://developers.google.com/google-ads/api/fields/v26/goal.md.txt), [group_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_content_suitability_placement_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_reconciliation](https://developers.google.com/google-ads/api/fields/v26/hotel_reconciliation.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_plan](https://developers.google.com/google-ads/api/fields/v26/keyword_plan.md.txt), [keyword_plan_ad_group](https://developers.google.com/google-ads/api/fields/v26/keyword_plan_ad_group.md.txt), [keyword_plan_ad_group_keyword](https://developers.google.com/google-ads/api/fields/v26/keyword_plan_ad_group_keyword.md.txt), [keyword_plan_campaign](https://developers.google.com/google-ads/api/fields/v26/keyword_plan_campaign.md.txt), [keyword_plan_campaign_keyword](https://developers.google.com/google-ads/api/fields/v26/keyword_plan_campaign_keyword.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [label](https://developers.google.com/google-ads/api/fields/v26/label.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [lead_form_submission_data](https://developers.google.com/google-ads/api/fields/v26/lead_form_submission_data.md.txt), [lift_measurement_age_range](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_age_range.md.txt), [lift_measurement_campaign](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_campaign.md.txt), [lift_measurement_config](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_config.md.txt), [lift_measurement_device](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_device.md.txt), [lift_measurement_flight](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_flight.md.txt), [lift_measurement_gender](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_gender.md.txt), [lift_measurement_video](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_video.md.txt), [local_services_employee](https://developers.google.com/google-ads/api/fields/v26/local_services_employee.md.txt), [local_services_lead](https://developers.google.com/google-ads/api/fields/v26/local_services_lead.md.txt), [local_services_lead_conversation](https://developers.google.com/google-ads/api/fields/v26/local_services_lead_conversation.md.txt), [local_services_verification_artifact](https://developers.google.com/google-ads/api/fields/v26/local_services_verification_artifact.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [media_file](https://developers.google.com/google-ads/api/fields/v26/media_file.md.txt), [multi_party_auth_review](https://developers.google.com/google-ads/api/fields/v26/multi_party_auth_review.md.txt), [offline_conversion_upload_client_summary](https://developers.google.com/google-ads/api/fields/v26/offline_conversion_upload_client_summary.md.txt), [offline_conversion_upload_conversion_action_summary](https://developers.google.com/google-ads/api/fields/v26/offline_conversion_upload_conversion_action_summary.md.txt), [offline_user_data_job](https://developers.google.com/google-ads/api/fields/v26/offline_user_data_job.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [per_store_view](https://developers.google.com/google-ads/api/fields/v26/per_store_view.md.txt), [performance_max_placement_view](https://developers.google.com/google-ads/api/fields/v26/performance_max_placement_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [product_link](https://developers.google.com/google-ads/api/fields/v26/product_link.md.txt), [product_link_invitation](https://developers.google.com/google-ads/api/fields/v26/product_link_invitation.md.txt), [recommendation](https://developers.google.com/google-ads/api/fields/v26/recommendation.md.txt), [recommendation_subscription](https://developers.google.com/google-ads/api/fields/v26/recommendation_subscription.md.txt), [remarketing_action](https://developers.google.com/google-ads/api/fields/v26/remarketing_action.md.txt), [search_lift_keyword_bundle](https://developers.google.com/google-ads/api/fields/v26/search_lift_keyword_bundle.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shared_criterion](https://developers.google.com/google-ads/api/fields/v26/shared_criterion.md.txt), [shared_set](https://developers.google.com/google-ads/api/fields/v26/shared_set.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt), [smart_campaign_setting](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_setting.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [third_party_app_analytics_link](https://developers.google.com/google-ads/api/fields/v26/third_party_app_analytics_link.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [user_list](https://developers.google.com/google-ads/api/fields/v26/user_list.md.txt), [user_list_customer_type](https://developers.google.com/google-ads/api/fields/v26/user_list_customer_type.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt), [you_tube_video_upload](https://developers.google.com/google-ads/api/fields/v26/you_tube_video_upload.md.txt)

## customer.call_reporting_setting.call_conversion_action

Field descriptionCustomer-level call conversion action to attribute a call conversion to.
If not set a default conversion action is used. Only in effect when
call_conversion_reporting_enabled is set to true.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.call_reporting_setting.call_conversion_reporting_enabled

Field descriptionWhether to enable call conversion reporting.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.call_reporting_setting.call_reporting_enabled

Field descriptionEnable reporting of phone call events by redirecting them through Google
System.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.contains_eu_political_advertising

Field descriptionOutput only. Returns the advertiser self-declaration status of whether this
customer contains political advertising content targeted towards the
European Union. You can use the Google Ads UI to update this account-level
declaration, or use the API to update the self-declaration status of
individual campaigns.
Category`ATTRIBUTE` Data Type`ENUM`
`CONTAINS_EU_POLITICAL_ADVERTISING``DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.EuPoliticalAdvertisingStatusEnum.EuPoliticalAdvertisingStatus` CapabilitiesSelectable: True  
Filterable: False  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.conversion_tracking_setting.accepted_customer_data_terms

Field descriptionOutput only. Whether the customer has accepted customer data terms. If
using cross-account conversion tracking, this value is inherited from the
manager. This field is read-only. For more
information, see <https://support.google.com/adspolicy/answer/7475709>.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.conversion_tracking_setting.conversion_tracking_id

Field descriptionOutput only. The conversion tracking id used for this account. This id
doesn't indicate whether the customer uses conversion tracking
(conversion_tracking_status does). This field is read-only.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.conversion_tracking_setting.conversion_tracking_status

Field descriptionOutput only. Conversion tracking status. It indicates whether the customer
is using conversion tracking, and who is the conversion tracking owner of
this customer. If this customer is using cross-account conversion tracking,
the value returned will differ based on the `login-customer-id` of the
request.
Category`ATTRIBUTE` Data Type`ENUM`
`CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER``CONVERSION_TRACKING_MANAGED_BY_SELF``CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER``NOT_CONVERSION_TRACKED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ConversionTrackingStatusEnum.ConversionTrackingStatus` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.conversion_tracking_setting.cross_account_conversion_tracking_id

Field descriptionOutput only. The conversion tracking id of the customer's manager. This is
set when the customer is opted into cross account conversion tracking, and
it overrides conversion_tracking_id. This field can only be managed through
the Google Ads UI. This field is read-only.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.conversion_tracking_setting.effective_enablement_setting

Field descriptionOutput only. The effective account-level enhanced conversions setting for
the customer. If using cross-account conversion tracking, this value is
inherited from the manager. This field is read-only.
Category`ATTRIBUTE` Data Type`ENUM`
`OFF``ON``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.EnhancedConversionsConfigEnum.EnhancedConversionsConfig` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.conversion_tracking_setting.enablement_setting

Field descriptionOutput only. Account-level setting indicating whether enhanced conversions
is enabled for the customer. This field is read-only.
Category`ATTRIBUTE` Data Type`ENUM`
`OFF``ON``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.EnhancedConversionsConfigEnum.EnhancedConversionsConfig` CapabilitiesSelectable: True  
Filterable: False  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.conversion_tracking_setting.google_ads_conversion_customer

Field descriptionThe resource name of the customer where conversions are created and
managed. This field is read-only.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.currency_code

Field descriptionImmutable. The currency in which the account operates.
A subset of the currency codes from the ISO 4217 standard is
supported.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.customer_agreement_setting.accepted_lead_form_terms

Field descriptionOutput only. Whether the customer has accepted lead form term of service.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.descriptive_name

Field descriptionOptional, non-unique descriptive name of the customer.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.final_url_suffix

Field descriptionThe URL template for appending params to the final URL.
Only mutable in an `update` operation.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.has_partners_badge

Field descriptionOutput only. Whether the Customer has a Partners program badge. If the
Customer is not associated with the Partners program, this will be false.
For more information, see
<https://support.google.com/partners/answer/3125774>.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.id

Field descriptionOutput only. The ID of the customer.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.image_asset_auto_migration_done

Field descriptionOutput only. True if feed based image has been migrated to asset based
image.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.image_asset_auto_migration_done_date_time

Field descriptionOutput only. Timestamp of migration from feed based image to asset base
image in yyyy-MM-dd HH:mm:ss format.
Category`ATTRIBUTE` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.local_services_settings.granular_insurance_statuses

Field descriptionOutput only. A read-only list of geo vertical level insurance statuses.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.resources.GranularInsuranceStatus` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.local_services_settings.granular_license_statuses

Field descriptionOutput only. A read-only list of geo vertical level license statuses.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.resources.GranularLicenseStatus` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.local_services_settings.redemption_provider_info.external_merchant_id.alphanumeric_id

Field descriptionAlphanumeric or string merchant identifier in the external partner's
system. The length of this string must be between 1 and 50, inclusive.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.local_services_settings.redemption_provider_info.external_merchant_id.numeric_id

Field descriptionNumeric merchant identifier in the external partner's system.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.location_asset_auto_migration_done

Field descriptionOutput only. True if feed based location has been migrated to asset based
location.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.location_asset_auto_migration_done_date_time

Field descriptionOutput only. Timestamp of migration from feed based location to asset base
location in yyyy-MM-dd HH:mm:ss format.
Category`ATTRIBUTE` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.manager

Field descriptionOutput only. Whether the customer is a manager.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.optimization_score

Field descriptionOutput only. Optimization score of the customer.

Optimization score is an estimate of how well a customer's campaigns are
set to perform. It ranges from 0% (0.0) to 100% (1.0). This field is null
for all manager customers, and for unscored non-manager customers.

See "About optimization score" at
<https://support.google.com/google-ads/answer/9061546>.

This field is read-only.
Category`ATTRIBUTE` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.optimization_score_weight

Field descriptionOutput only. Optimization score weight of the customer.

Optimization score weight can be used to compare/aggregate optimization
scores across multiple non-manager customers. The aggregate optimization
score of a manager is computed as the sum over all of their customers of
`Customer.optimization_score * Customer.optimization_score_weight`. This
field is 0 for all manager customers, and for unscored non-manager
customers.

This field is read-only.
Category`ATTRIBUTE` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.pay_per_conversion_eligibility_failure_reasons

Field descriptionOutput only. Reasons why the customer is not eligible to use
PaymentMode.CONVERSIONS. If the list is empty, the customer is eligible.
This field is read-only.
Category`ATTRIBUTE` Data Type`ENUM`
`ANALYSIS_NOT_COMPLETE``AVERAGE_DAILY_SPEND_TOO_HIGH``CONVERSION_LAG_TOO_HIGH``HAS_CAMPAIGN_WITH_SHARED_BUDGET``HAS_UPLOAD_CLICKS_CONVERSION``NOT_ENOUGH_CONVERSIONS``OTHER``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.remarketing_setting.google_global_site_tag

Field descriptionOutput only. The Google tag.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: False  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.resource_name

Field descriptionImmutable. The resource name of the customer.
Customer resource names have the form:

`customers/{customer_id}`
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.status

Field descriptionOutput only. The status of the customer.
Category`ATTRIBUTE` Data Type`ENUM`
`CANCELED``CLOSED``ENABLED``SUSPENDED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.CustomerStatusEnum.CustomerStatus` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.test_account

Field descriptionOutput only. Whether the customer is a test account.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.time_zone

Field descriptionImmutable. The local timezone ID of the customer.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.tracking_url_template

Field descriptionThe URL template for constructing a tracking URL out of parameters.
Only mutable in an `update` operation.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.video_brand_safety_suitability

Field descriptionBrand Safety setting at the account level. Allows for selecting
an inventory type to show your ads on content that is the right fit for
your brand. See <https://support.google.com/google-ads/answer/7515513>.
Category`ATTRIBUTE` Data Type`ENUM`
`EXPANDED_INVENTORY``LIMITED_INVENTORY``STANDARD_INVENTORY``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.BrandSafetySuitabilityEnum.BrandSafetySuitability` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.video_customer.third_party_integration_partners.brand_lift_integration_partners

Field descriptionAllowed third party integration partners for Brand Lift verification.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.CustomerThirdPartyBrandLiftIntegrationPartner` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.video_customer.third_party_integration_partners.brand_safety_integration_partners

Field descriptionAllowed third party integration partners for brand safety verification.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.CustomerThirdPartyBrandSafetyIntegrationPartner` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.video_customer.third_party_integration_partners.conversion_attribution_integration_partners

Field descriptionAllowed third party integration partners for YouTube conversion attribution
verification.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.CustomerThirdPartyConversionAttributionIntegrationPartner` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.video_customer.third_party_integration_partners.reach_integration_partners

Field descriptionAllowed third party integration partners for reach verification.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.CustomerThirdPartyReachIntegrationPartner` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## customer.video_customer.third_party_integration_partners.viewability_integration_partners

Field descriptionAllowed third party integration partners for YouTube viewability
verification.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.CustomerThirdPartyViewabilityIntegrationPartner` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as customer.auto_tagging_enabled.

## segments.ad_format_type

Field descriptionAd Format type.
Category`SEGMENT` Data Type`ENUM`
`AUDIO``BUMPER``INFEED``INSTREAM_NON_SKIPPABLE``INSTREAM_SKIPPABLE``MASTHEAD``OTHER``OUTSTREAM``PAUSE``SHORTS``TEXT``UNKNOWN``UNSEGMENTED``UNSPECIFIED``VERTICAL_ADS_BOOKING_LINK``VERTICAL_ADS_PROMOTION` Type URL`google.ads.googleads.v26.enums.AdFormatTypeEnum.AdFormatType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt)

**Segments:** ad_sub_format_type, adjusted_age_range, adjusted_gender, date, day_of_week, device, month, quarter, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

**Metrics:** active_view_audibility_invalid_givt_measurable_impressions_rate, active_view_audibility_invalid_measurable_impressions_rate, active_view_audibility_measurable_impressions, active_view_audibility_measurable_impressions_rate, active_view_audible_impressions, active_view_audible_impressions_rate, active_view_audible_quartile_p100_rate, active_view_audible_quartile_p25_rate, active_view_audible_quartile_p50_rate, active_view_audible_quartile_p75_rate, active_view_audible_thirty_seconds_impressions, active_view_audible_thirty_seconds_impressions_rate, active_view_audible_two_seconds_impressions, active_view_audible_two_seconds_impressions_rate, all_conversions, all_conversions_from_interactions_rate, all_conversions_value, average_cpc, average_cpe, average_cpm, average_video_watch_time_duration_millis, clicks, conversions, conversions_from_interactions_rate, conversions_from_interactions_value_per_interaction, conversions_value, conversions_value_per_cost, cost_converted_currency_per_platform_comparable_conversion, cost_micros, cost_per_all_conversions, cost_per_conversion, cost_per_platform_comparable_conversion, cross_device_conversions, ctr, engagement_rate, engagements, impressions, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_from_interactions_rate, platform_comparable_conversions_from_interactions_value_per_interaction, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, platform_comparable_conversions_value_per_cost, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_budget_lost_top_impression_share, search_impression_share, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, search_rank_lost_top_impression_share, search_top_impression_share, svr, trueview_average_cpv, unique_users, unique_users_eight_plus, unique_users_eight_plus_info, unique_users_five_plus, unique_users_five_plus_info, unique_users_four_plus, unique_users_four_plus_info, unique_users_info, unique_users_nine_plus, unique_users_nine_plus_info, unique_users_seven_plus, unique_users_seven_plus_info, unique_users_six_plus, unique_users_six_plus_info, unique_users_ten_plus, unique_users_ten_plus_info, unique_users_three_plus, unique_users_three_plus_info, unique_users_two_plus, unique_users_two_plus_info, value_per_all_conversions, value_per_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date, vertical_ads_potential_impressions, video_quartile_p100_rate, video_quartile_p25_rate, video_quartile_p50_rate, video_quartile_p75_rate, video_trueview_view_rate, video_trueview_view_rate_in_feed, video_trueview_view_rate_in_stream, video_trueview_view_rate_shorts, video_trueview_views, video_watch_time_duration_millis, view_through_conversions, youtube_comments, youtube_likes, youtube_shares

## segments.ad_network_type

Field descriptionAd network type.
Category`SEGMENT` Data Type`ENUM`
`CONTENT``DISCOVER``GMAIL``GOOGLE_OWNED_CHANNELS``GOOGLE_TV``MAPS``MIXED``SEARCH``SEARCH_PARTNERS``UNKNOWN``UNSPECIFIED``YOUTUBE` Type URL`google.ads.googleads.v26.enums.AdNetworkTypeEnum.AdNetworkType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_combination_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_combination_view.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [per_store_view](https://developers.google.com/google-ads/api/fields/v26/per_store_view.md.txt), [performance_max_placement_view](https://developers.google.com/google-ads/api/fields/v26/performance_max_placement_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_destination_type, ad_sub_network_type, ad_using_product_data, ad_using_video, advance_booking_window, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, device, external_activity_id, external_conversion_source, geo_target_airport, geo_target_canton, geo_target_city, geo_target_country, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, interaction_on_this_extension, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, match_type, month, month_of_year, new_versus_returning_customers, partner_hotel_id, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_sold_brand, product_sold_category_level1, product_sold_category_level2, product_sold_category_level3, product_sold_category_level4, product_sold_category_level5, product_sold_condition, product_sold_custom_attribute0, product_sold_custom_attribute1, product_sold_custom_attribute2, product_sold_custom_attribute3, product_sold_custom_attribute4, product_sold_item_id, product_sold_title, product_sold_type_l1, product_sold_type_l2, product_sold_type_l3, product_sold_type_l4, product_sold_type_l5, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, search_term_match_source, search_term_match_type, search_term_targeting_status, slot, start_date, start_day_of_week, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

**Metrics:** absolute_top_impression_percentage, active_view_audibility_invalid_givt_measurable_impressions_rate, active_view_audibility_invalid_measurable_impressions_rate, active_view_audibility_measurable_impressions, active_view_audibility_measurable_impressions_rate, active_view_audible_impressions, active_view_audible_impressions_rate, active_view_audible_quartile_p100_rate, active_view_audible_quartile_p25_rate, active_view_audible_quartile_p50_rate, active_view_audible_quartile_p75_rate, active_view_audible_thirty_seconds_impressions, active_view_audible_thirty_seconds_impressions_rate, active_view_audible_two_seconds_impressions, active_view_audible_two_seconds_impressions_rate, active_view_cpm, active_view_ctr, active_view_impressions, active_view_measurability, active_view_measurable_cost_micros, active_view_measurable_impressions, active_view_viewability, all_average_cart_size, all_average_order_value_micros, all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_from_interactions_value_per_interaction, all_conversions_value, all_conversions_value_by_conversion_date, all_conversions_value_per_cost, all_cost_of_goods_sold_micros, all_cross_sell_cost_of_goods_sold_micros, all_cross_sell_gross_profit_micros, all_cross_sell_revenue_micros, all_cross_sell_units_sold, all_gross_profit_margin, all_gross_profit_micros, all_lead_cost_of_goods_sold_micros, all_lead_gross_profit_micros, all_lead_revenue_micros, all_lead_units_sold, all_new_customer_lifetime_value, all_orders, all_revenue_micros, all_units_sold, average_cart_size, average_cost, average_cpc, average_cpe, average_cpm, average_order_value_micros, average_page_views, average_time_on_site, benchmark_average_max_cpc, benchmark_ctr, biddable_app_install_conversions, biddable_app_post_install_conversions, biddable_cohort_app_post_install_conversions, bounce_rate, clicks, content_budget_lost_impression_share, content_impression_share, content_rank_lost_impression_share, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_from_interactions_value_per_interaction, conversions_value, conversions_value_by_conversion_date, conversions_value_per_cost, cost_converted_currency_per_platform_comparable_conversion, cost_micros, cost_of_goods_sold_micros, cost_per_all_conversions, cost_per_conversion, cost_per_current_model_attributed_conversion, cost_per_platform_comparable_conversion, cross_device_conversions, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, ctr, current_model_attributed_conversions, current_model_attributed_conversions_from_interactions_rate, current_model_attributed_conversions_from_interactions_value_per_interaction, current_model_attributed_conversions_value, current_model_attributed_conversions_value_per_cost, engagement_rate, engagements, general_invalid_click_rate, general_invalid_clicks, gmail_forwards, gmail_saves, gmail_secondary_clicks, gross_profit_margin, gross_profit_micros, hotel_average_lead_value_micros, hotel_eligible_impressions, hotel_price_difference_percentage, impressions, interaction_event_types, interaction_rate, interactions, invalid_click_rate, invalid_clicks, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, message_chat_rate, message_chats, message_impressions, mobile_friendly_clicks_percentage, new_customer_lifetime_value, orders, original_conversion_value, percent_new_visitors, phone_calls, phone_impressions, phone_through_rate, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_from_interactions_rate, platform_comparable_conversions_from_interactions_value_per_interaction, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, platform_comparable_conversions_value_per_cost, relative_ctr, revenue_micros, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_budget_lost_top_impression_share, search_click_share, search_exact_match_impression_share, search_impression_share, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, search_rank_lost_top_impression_share, search_top_impression_share, speed_score, top_impression_percentage, trueview_average_cpv, unique_users, unique_users_eight_plus, unique_users_eight_plus_info, unique_users_five_plus, unique_users_five_plus_info, unique_users_four_plus, unique_users_four_plus_info, unique_users_info, unique_users_nine_plus, unique_users_nine_plus_info, unique_users_seven_plus, unique_users_seven_plus_info, unique_users_six_plus, unique_users_six_plus_info, unique_users_ten_plus, unique_users_ten_plus_info, unique_users_three_plus, unique_users_three_plus_info, unique_users_two_plus, unique_users_two_plus_info, units_sold, valid_accelerated_mobile_pages_clicks_percentage, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date, video_quartile_p100_rate, video_quartile_p25_rate, video_quartile_p50_rate, video_quartile_p75_rate, video_trueview_view_rate, video_trueview_view_rate_in_feed, video_trueview_view_rate_in_stream, video_trueview_view_rate_shorts, video_trueview_views, view_through_conversions, youtube_comments, youtube_likes, youtube_shares

## segments.ad_sub_format_type

Field descriptionAd sub format type. Segments YouTube non-skippable instream ads by
duration. Has to always be selected together with ad_format_type.
Category`SEGMENT` Data Type`ENUM`
`INSTREAM_NON_SKIPPABLE_MAX30_SEC``INSTREAM_NON_SKIPPABLE_MAX60_SEC``INSTREAM_NON_SKIPPABLE_STANDARD``UNKNOWN``UNSEGMENTED``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.AdSubFormatTypeEnum.AdSubFormatType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.ad_format_type. Plus: segments.ad_format_type. Except: [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_budget_lost_top_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, metrics.search_rank_lost_top_impression_share, metrics.search_top_impression_share, metrics.vertical_ads_potential_impressions, metrics.youtube_comments, metrics.youtube_likes, metrics.youtube_shares, segments.ad_sub_format_type, segments.vertical_ads_event_participant_display_names, segments.vertical_ads_hotel_class, segments.vertical_ads_listing, segments.vertical_ads_listing_brand, segments.vertical_ads_listing_city, segments.vertical_ads_listing_country, segments.vertical_ads_listing_region, segments.vertical_ads_listing_user_rating, segments.vertical_ads_listing_venue, segments.vertical_ads_partner_account, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type, segments.vertical_ads_vertical.

## segments.ad_sub_network_type

Field descriptionAd sub network type. Currently only available for ads running as part of
DemandGen campaigns on YouTube and has to always be selected together with
ad_network_type.
Category`SEGMENT` Data Type`ENUM`
`UNKNOWN``UNSEGMENTED``UNSPECIFIED``YOUTUBE_INFEED``YOUTUBE_INSTREAM``YOUTUBE_SHORTS` Type URL`google.ads.googleads.v26.enums.AdSubNetworkTypeEnum.AdSubNetworkType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_combination_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_combination_view.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [per_store_view](https://developers.google.com/google-ads/api/fields/v26/per_store_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** ad_destination_type, ad_network_type, advance_booking_window, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, device, external_conversion_source, geo_target_airport, geo_target_canton, geo_target_city, geo_target_country, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, interaction_on_this_extension, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, match_type, month, month_of_year, new_versus_returning_customers, partner_hotel_id, product_aggregator_id, product_brand, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_item_id, product_language, product_merchant_id, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, search_term_match_source, search_term_match_type, search_term_targeting_status, slot, start_date, start_day_of_week, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

**Metrics:** absolute_top_impression_percentage, active_view_audibility_invalid_givt_measurable_impressions_rate, active_view_audibility_invalid_measurable_impressions_rate, active_view_audibility_measurable_impressions, active_view_audibility_measurable_impressions_rate, active_view_audible_impressions, active_view_audible_impressions_rate, active_view_audible_quartile_p100_rate, active_view_audible_quartile_p25_rate, active_view_audible_quartile_p50_rate, active_view_audible_quartile_p75_rate, active_view_audible_thirty_seconds_impressions, active_view_audible_thirty_seconds_impressions_rate, active_view_audible_two_seconds_impressions, active_view_audible_two_seconds_impressions_rate, active_view_cpm, active_view_ctr, active_view_impressions, active_view_measurability, active_view_measurable_cost_micros, active_view_measurable_impressions, active_view_viewability, all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_from_interactions_value_per_interaction, all_conversions_value, all_conversions_value_by_conversion_date, all_conversions_value_per_cost, all_new_customer_lifetime_value, average_cart_size, average_cost, average_cpc, average_cpe, average_cpm, average_order_value_micros, average_page_views, average_time_on_site, benchmark_average_max_cpc, benchmark_ctr, biddable_app_install_conversions, biddable_app_post_install_conversions, biddable_cohort_app_post_install_conversions, bounce_rate, clicks, content_budget_lost_impression_share, content_impression_share, content_rank_lost_impression_share, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_from_interactions_value_per_interaction, conversions_value, conversions_value_by_conversion_date, conversions_value_per_cost, cost_converted_currency_per_platform_comparable_conversion, cost_micros, cost_of_goods_sold_micros, cost_per_all_conversions, cost_per_conversion, cost_per_current_model_attributed_conversion, cost_per_platform_comparable_conversion, cross_device_conversions, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, ctr, current_model_attributed_conversions, current_model_attributed_conversions_from_interactions_rate, current_model_attributed_conversions_from_interactions_value_per_interaction, current_model_attributed_conversions_value, current_model_attributed_conversions_value_per_cost, engagement_rate, engagements, general_invalid_click_rate, general_invalid_clicks, gmail_forwards, gmail_saves, gmail_secondary_clicks, gross_profit_margin, gross_profit_micros, hotel_average_lead_value_micros, hotel_eligible_impressions, hotel_price_difference_percentage, impressions, interaction_event_types, interaction_rate, interactions, invalid_click_rate, invalid_clicks, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, message_chat_rate, message_chats, message_impressions, mobile_friendly_clicks_percentage, new_customer_lifetime_value, orders, original_conversion_value, percent_new_visitors, phone_calls, phone_impressions, phone_through_rate, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_from_interactions_rate, platform_comparable_conversions_from_interactions_value_per_interaction, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, platform_comparable_conversions_value_per_cost, relative_ctr, revenue_micros, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_budget_lost_top_impression_share, search_click_share, search_exact_match_impression_share, search_impression_share, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, search_rank_lost_top_impression_share, search_top_impression_share, speed_score, top_impression_percentage, trueview_average_cpv, unique_users, unique_users_eight_plus, unique_users_eight_plus_info, unique_users_five_plus, unique_users_five_plus_info, unique_users_four_plus, unique_users_four_plus_info, unique_users_info, unique_users_nine_plus, unique_users_nine_plus_info, unique_users_seven_plus, unique_users_seven_plus_info, unique_users_six_plus, unique_users_six_plus_info, unique_users_ten_plus, unique_users_ten_plus_info, unique_users_three_plus, unique_users_three_plus_info, unique_users_two_plus, unique_users_two_plus_info, units_sold, valid_accelerated_mobile_pages_clicks_percentage, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date, video_quartile_p100_rate, video_quartile_p25_rate, video_quartile_p50_rate, video_quartile_p75_rate, video_trueview_view_rate, video_trueview_view_rate_in_feed, video_trueview_view_rate_in_stream, video_trueview_view_rate_shorts, video_trueview_views, view_through_conversions

## segments.ad_using_product_data

Field descriptionIndicates whether an ad is using product data from a Google Merchant
Center feed. This segment is only available for PMax campaigns and will
not return data when any other campaign type is selected.
Category`SEGMENT` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** ad_network_type, ad_using_video, date, day_of_week, month, quarter, week, year

**Metrics:** clicks, conversions, conversions_value, cost_micros, impressions, interaction_event_types, interactions

## segments.ad_using_video

Field descriptionIndicates whether an ad is using a video asset. This segment is only
available for PMax campaigns and will not return data when any other
campaign type is selected.
Category`SEGMENT` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.ad_using_product_data. Plus: segments.ad_using_product_data. Except: segments.ad_using_video.

## segments.adjusted_age_range

Field descriptionAdjusted age range. This is the age range of the user after applying
modeling to get more accurate age and gender information. Currently, both
adjusted_age_range and adjusted_gender need to be selected together to get
valid reach stats. These segmentations are only available for allowlisted
customers.
Category`SEGMENT` Data Type`ENUM`
`AGE_RANGE_18_24``AGE_RANGE_25_34``AGE_RANGE_35_44``AGE_RANGE_45_54``AGE_RANGE_55_64``AGE_RANGE_65_UP``AGE_RANGE_UNDETERMINED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.AgeRangeTypeEnum.AgeRangeType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** ad_format_type, ad_sub_format_type, adjusted_gender, date, day_of_week, device, month, week

**Metrics:** average_impression_frequency_per_user, coviewed_impressions, primary_impressions, svr, unique_users

## segments.adjusted_gender

Field descriptionAdjusted gender. This is the gender of the user after applying modeling to
get more accurate age and gender information. Currently, both
adjusted_age_range and adjusted_gender need to be selected together to get
valid reach stats. These segmentations are only available for allowlisted
customers.
Category`SEGMENT` Data Type`ENUM`
`FEMALE``MALE``UNDETERMINED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.GenderTypeEnum.GenderType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.adjusted_age_range. Plus: segments.adjusted_age_range. Except: segments.adjusted_gender.

## segments.advance_booking_window

Field descriptionAdvance booking window for the itinerary in days.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, device, external_conversion_source, geo_target_country, hour, length_of_booking, month, quarter, start_date, start_day_of_week, user_set_dates, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_partner_account, vertical_ads_vertical, week, year

**Metrics:** absolute_top_impression_percentage, all_conversions, all_conversions_from_interactions_rate, all_conversions_from_interactions_value_per_interaction, all_conversions_value, all_conversions_value_per_cost, clicks, conversions, conversions_from_interactions_rate, conversions_from_interactions_value_per_interaction, conversions_value, conversions_value_per_cost, cost_micros, cost_per_all_conversions, cost_per_conversion, cross_device_conversions, ctr, impressions, search_click_share, search_top_impression_share, top_impression_percentage, value_per_all_conversions, value_per_conversion

## segments.auction_insight_domain

Field descriptionDomain (visible URL) of a participant in the Auction Insights report.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: False  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt)

**Segments:** date, day_of_week, device, month, quarter, week, year

**Metrics:** auction_insight_search_absolute_top_impression_percentage, auction_insight_search_impression_share, auction_insight_search_outranking_share, auction_insight_search_overlap_rate, auction_insight_search_position_above_rate, auction_insight_search_top_impression_percentage

## segments.click_type

Field descriptionClick type.
Category`SEGMENT` Data Type`ENUM`
`AD_IMAGE``APP_DEEPLINK``BREADCRUMBS``BROADBAND_PLAN``CALLS``CALL_TRACKING``CLICK_ON_ENGAGEMENT_AD``CLICK_TO_MESSAGE_LANDING_PAGE_CLICK``CLICK_TO_MESSAGE_THIRD_PARTY_CLICK``CROSS_NETWORK``GET_DIRECTIONS``HOTEL_BOOK_ON_GOOGLE_ROOM_SELECTION``HOTEL_PRICE``LOCATION_EXPANSION``LOCATION_FORMAT_CALL``LOCATION_FORMAT_DIRECTIONS``LOCATION_FORMAT_IMAGE``LOCATION_FORMAT_LANDING_PAGE``LOCATION_FORMAT_MAP``LOCATION_FORMAT_STORE_INFO``LOCATION_FORMAT_TEXT``MOBILE_CALL_TRACKING``OFFER_PRINTS``OTHER``PRICE_EXTENSION``PRODUCT_AD_APP_DEEPLINK``PRODUCT_ASSETS``PRODUCT_EXTENSION_CLICKS``PRODUCT_LISTING_ADS_COUPON``PRODUCT_LISTING_AD_CLICKS``PRODUCT_LISTING_AD_LOCAL``PRODUCT_LISTING_AD_MULTICHANNEL_LOCAL``PRODUCT_LISTING_AD_MULTICHANNEL_ONLINE``PRODUCT_LISTING_AD_TRANSACTABLE``PROMOTION_EXTENSION``SHOPPING_COMPARISON_LISTING``SHOWCASE_AD_CATEGORY_LINK``SHOWCASE_AD_LOCAL_PRODUCT_LINK``SHOWCASE_AD_LOCAL_STOREFRONT_LINK``SHOWCASE_AD_ONLINE_PRODUCT_LINK``SITELINKS``STORE_LOCATOR``SWIPEABLE_GALLERY_AD_HEADLINE``SWIPEABLE_GALLERY_AD_SEE_MORE``SWIPEABLE_GALLERY_AD_SITELINK_FIVE``SWIPEABLE_GALLERY_AD_SITELINK_FOUR``SWIPEABLE_GALLERY_AD_SITELINK_ONE``SWIPEABLE_GALLERY_AD_SITELINK_THREE``SWIPEABLE_GALLERY_AD_SITELINK_TWO``SWIPEABLE_GALLERY_AD_SWIPES``TRAVEL_ASSETS``UNKNOWN``UNSPECIFIED``URL_CLICKS``VEHICLE_ASSETS``VIDEO_APP_STORE_CLICKS``VIDEO_CALL_TO_ACTION_CLICKS``VIDEO_CARD_ACTION_HEADLINE_CLICKS``VIDEO_CHANNEL_CLICK``VIDEO_END_CAP_CLICKS``VIDEO_RELATED_VIDEOS_CLICK``VIDEO_WEBSITE_CLICKS``VISUAL_SITELINKS``WIRELESS_PLAN` Type URL`google.ads.googleads.v26.enums.ClickTypeEnum.ClickType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, advance_booking_window, conversion_action, conversion_action_category, conversion_action_name, date, day_of_week, device, external_conversion_source, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, match_type, month, month_of_year, partner_hotel_id, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, slot, start_date, start_day_of_week, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

**Metrics:** active_view_cpm, active_view_ctr, active_view_impressions, active_view_measurability, active_view_measurable_cost_micros, active_view_measurable_impressions, active_view_viewability, all_average_cart_size, all_average_order_value_micros, all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_from_interactions_value_per_interaction, all_conversions_value, all_conversions_value_by_conversion_date, all_conversions_value_per_cost, all_cost_of_goods_sold_micros, all_cross_sell_cost_of_goods_sold_micros, all_cross_sell_gross_profit_micros, all_cross_sell_revenue_micros, all_cross_sell_units_sold, all_gross_profit_margin, all_gross_profit_micros, all_lead_cost_of_goods_sold_micros, all_lead_gross_profit_micros, all_lead_revenue_micros, all_lead_units_sold, all_orders, all_revenue_micros, all_units_sold, average_cart_size, average_cost, average_cpc, average_cpm, average_order_value_micros, clicks, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_from_interactions_value_per_interaction, conversions_value, conversions_value_by_conversion_date, conversions_value_per_cost, cost_converted_currency_per_platform_comparable_conversion, cost_micros, cost_of_goods_sold_micros, cost_per_all_conversions, cost_per_conversion, cost_per_current_model_attributed_conversion, cost_per_platform_comparable_conversion, cross_device_conversions, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, ctr, current_model_attributed_conversions, current_model_attributed_conversions_from_interactions_rate, current_model_attributed_conversions_from_interactions_value_per_interaction, current_model_attributed_conversions_value, current_model_attributed_conversions_value_per_cost, general_invalid_click_rate, general_invalid_clicks, gmail_forwards, gmail_saves, gmail_secondary_clicks, gross_profit_margin, gross_profit_micros, hotel_average_lead_value_micros, hotel_price_difference_percentage, impressions, interaction_event_types, interaction_rate, interactions, invalid_click_rate, invalid_clicks, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, mobile_friendly_clicks_percentage, orders, phone_calls, phone_impressions, phone_through_rate, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_from_interactions_rate, platform_comparable_conversions_from_interactions_value_per_interaction, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, platform_comparable_conversions_value_per_cost, revenue_micros, speed_score, units_sold, valid_accelerated_mobile_pages_clicks_percentage, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date

## segments.conversion_action

Field descriptionResource name of the conversion action.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [asset](https://developers.google.com/google-ads/api/fields/v26/asset.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_budget](https://developers.google.com/google-ads/api/fields/v26/campaign_budget.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [dynamic_search_ads_search_term_view](https://developers.google.com/google-ads/api/fields/v26/dynamic_search_ads_search_term_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [lift_measurement_config](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_config.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** ad_destination_type, ad_network_type, ad_sub_network_type, advance_booking_window, age_range, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, budget_campaign_association_status.campaign, budget_campaign_association_status.status, click_type, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_lift_conversion_category, conversion_lift_end_date, conversion_lift_included_conversion_action_types, conversion_lift_start_date, conversion_or_adjustment_lag_bucket, country, country_localized_name, date, day_of_week, device, external_conversion_source, gender, geo_target_airport, geo_target_canton, geo_target_city, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, match_type, month, month_of_year, new_versus_returning_customers, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_sold_brand, product_sold_category_level1, product_sold_category_level2, product_sold_category_level3, product_sold_category_level4, product_sold_category_level5, product_sold_condition, product_sold_custom_attribute0, product_sold_custom_attribute1, product_sold_custom_attribute2, product_sold_custom_attribute3, product_sold_custom_attribute4, product_sold_item_id, product_sold_title, product_sold_type_l1, product_sold_type_l2, product_sold_type_l3, product_sold_type_l4, product_sold_type_l5, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, search_term_match_source, search_term_match_type, search_term_targeting_status, slot, start_date, start_day_of_week, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, webpage, week, year

**Metrics:** all_average_cart_size, all_average_order_value_micros, all_conversions, all_conversions_by_conversion_date, all_conversions_value, all_conversions_value_by_conversion_date, all_cost_of_goods_sold_micros, all_cross_sell_cost_of_goods_sold_micros, all_cross_sell_gross_profit_micros, all_cross_sell_revenue_micros, all_cross_sell_units_sold, all_gross_profit_margin, all_gross_profit_micros, all_lead_cost_of_goods_sold_micros, all_lead_gross_profit_micros, all_lead_revenue_micros, all_lead_units_sold, all_new_customer_lifetime_value, all_orders, all_revenue_micros, all_units_sold, all_value_adjustment, average_cart_size, average_order_value_micros, biddable_app_install_conversions, biddable_app_post_install_conversions, conversion_lift_baseline_conversion_value, conversion_lift_baseline_conversions, conversion_lift_exposed_conversion_value, conversion_lift_exposed_conversions, conversions, conversions_by_conversion_date, conversions_value, conversions_value_by_conversion_date, cost_of_goods_sold_micros, cost_per_incremental_conversion, cost_per_incremental_conversion_p90_lower_bound, cost_per_incremental_conversion_p90_upper_bound, cross_device_conversions, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, current_model_attributed_conversions, current_model_attributed_conversions_value, gross_profit_margin, gross_profit_micros, incremental_conversion_value, incremental_conversion_value_p90_lower_bound, incremental_conversion_value_p90_upper_bound, incremental_conversion_value_p_value, incremental_conversion_value_per_cost, incremental_conversion_value_per_cost_p90_lower_bound, incremental_conversion_value_per_cost_p90_upper_bound, incremental_conversions, incremental_conversions_p90_lower_bound, incremental_conversions_p90_upper_bound, incremental_conversions_p_value, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, new_customer_lifetime_value, orders, original_conversion_value, relative_conversion_lift, relative_conversion_lift_p90_lower_bound, relative_conversion_lift_p90_upper_bound, relative_conversion_value_lift, relative_conversion_value_lift_p90_lower_bound, relative_conversion_value_lift_p90_upper_bound, revenue_micros, units_sold, value_adjustment, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion, view_through_conversions

## segments.conversion_action_category

Field descriptionConversion action category.
Category`SEGMENT` Data Type`ENUM`
`ADD_TO_CART``BEGIN_CHECKOUT``BOOK_APPOINTMENT``CONTACT``CONVERTED_LEAD``DEFAULT``DOWNLOAD``ENGAGEMENT``GET_DIRECTIONS``IMPORTED_LEAD``IN_APP_AD_REVENUE``MESSAGE_LEAD``OUTBOUND_CLICK``PAGE_VIEW``PHONE_CALL_LEAD``PURCHASE``QUALIFIED_LEAD``REQUEST_QUOTE``SIGNUP``STORE_SALE``STORE_VISIT``SUBMIT_LEAD_FORM``SUBSCRIBE_PAID``UNKNOWN``UNSPECIFIED``YOUTUBE_FOLLOW_ON_VIEWS` Type URL`google.ads.googleads.v26.enums.ConversionActionCategoryEnum.ConversionActionCategory` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.conversion_action. Plus: segments.conversion_action. Except: [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [lift_measurement_config](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_config.md.txt), metrics.conversion_lift_baseline_conversion_value, metrics.conversion_lift_baseline_conversions, metrics.conversion_lift_exposed_conversion_value, metrics.conversion_lift_exposed_conversions, metrics.cost_per_incremental_conversion, metrics.cost_per_incremental_conversion_p90_lower_bound, metrics.cost_per_incremental_conversion_p90_upper_bound, metrics.incremental_conversion_value, metrics.incremental_conversion_value_p90_lower_bound, metrics.incremental_conversion_value_p90_upper_bound, metrics.incremental_conversion_value_p_value, metrics.incremental_conversion_value_per_cost, metrics.incremental_conversion_value_per_cost_p90_lower_bound, metrics.incremental_conversion_value_per_cost_p90_upper_bound, metrics.incremental_conversions, metrics.incremental_conversions_p90_lower_bound, metrics.incremental_conversions_p90_upper_bound, metrics.incremental_conversions_p_value, metrics.relative_conversion_lift, metrics.relative_conversion_lift_p90_lower_bound, metrics.relative_conversion_lift_p90_upper_bound, metrics.relative_conversion_value_lift, metrics.relative_conversion_value_lift_p90_lower_bound, metrics.relative_conversion_value_lift_p90_upper_bound, segments.age_range, segments.conversion_action_category, segments.conversion_lift_conversion_category, segments.conversion_lift_end_date, segments.conversion_lift_included_conversion_action_types, segments.conversion_lift_start_date, segments.country, segments.country_localized_name, segments.gender.

## segments.conversion_action_name

Field descriptionConversion action name.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.conversion_action. Plus: segments.conversion_action. Except: segments.conversion_action_name.

## segments.conversion_adjustment

Field descriptionThis segments your conversion columns by the original conversion and
conversion value versus the delta if conversions were adjusted. False row
has the data as originally stated; While true row has the delta between
data now and the data as originally stated. Summing the two together
results post-adjustment data.
Category`SEGMENT` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [asset](https://developers.google.com/google-ads/api/fields/v26/asset.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt)

**Segments:** ad_destination_type, ad_network_type, ad_sub_network_type, advance_booking_window, conversion_action, conversion_action_category, conversion_action_name, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, external_conversion_source, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, length_of_booking, match_type, month, new_versus_returning_customers, quarter, slot, start_date, start_day_of_week, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

**Metrics:** all_conversions, all_conversions_by_conversion_date, all_conversions_value, all_conversions_value_by_conversion_date, all_new_customer_lifetime_value, all_value_adjustment, conversions, conversions_by_conversion_date, conversions_value, conversions_value_by_conversion_date, cross_device_conversions, current_model_attributed_conversions, current_model_attributed_conversions_value, new_customer_lifetime_value, original_conversion_value, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, value_adjustment, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date

## segments.conversion_attribution_event_type

Field descriptionConversion attribution event type.
Category`SEGMENT` Data Type`ENUM`
`CLICK``ENGAGED_VIEW``IMPRESSION``INTERACTION``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ConversionAttributionEventTypeEnum.ConversionAttributionEventType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, advance_booking_window, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, external_conversion_source, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, length_of_booking, match_type, month, new_versus_returning_customers, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_sold_brand, product_sold_category_level1, product_sold_category_level2, product_sold_category_level3, product_sold_category_level4, product_sold_category_level5, product_sold_condition, product_sold_custom_attribute0, product_sold_custom_attribute1, product_sold_custom_attribute2, product_sold_custom_attribute3, product_sold_custom_attribute4, product_sold_item_id, product_sold_title, product_sold_type_l1, product_sold_type_l2, product_sold_type_l3, product_sold_type_l4, product_sold_type_l5, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, slot, start_date, start_day_of_week, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

**Metrics:** all_average_cart_size, all_average_order_value_micros, all_conversions, all_conversions_by_conversion_date, all_conversions_value, all_conversions_value_by_conversion_date, all_cost_of_goods_sold_micros, all_cross_sell_cost_of_goods_sold_micros, all_cross_sell_gross_profit_micros, all_cross_sell_revenue_micros, all_cross_sell_units_sold, all_gross_profit_margin, all_gross_profit_micros, all_lead_cost_of_goods_sold_micros, all_lead_gross_profit_micros, all_lead_revenue_micros, all_lead_units_sold, all_new_customer_lifetime_value, all_orders, all_revenue_micros, all_units_sold, all_value_adjustment, average_cart_size, average_order_value_micros, conversions, conversions_by_conversion_date, conversions_value, conversions_value_by_conversion_date, cost_of_goods_sold_micros, cross_device_conversions, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, current_model_attributed_conversions, current_model_attributed_conversions_value, gross_profit_margin, gross_profit_micros, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, new_customer_lifetime_value, orders, original_conversion_value, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, revenue_micros, units_sold, value_adjustment, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date

## segments.conversion_lag_bucket

Field descriptionAn enum value representing the number of days between the impression and
the conversion.
Category`SEGMENT` Data Type`ENUM`
`EIGHT_TO_NINE_DAYS``ELEVEN_TO_TWELVE_DAYS``FIVE_TO_SIX_DAYS``FORTY_FIVE_TO_SIXTY_DAYS``FOURTEEN_TO_TWENTY_ONE_DAYS``FOUR_TO_FIVE_DAYS``LESS_THAN_ONE_DAY``NINE_TO_TEN_DAYS``ONE_TO_TWO_DAYS``SEVEN_TO_EIGHT_DAYS``SIXTY_TO_NINETY_DAYS``SIX_TO_SEVEN_DAYS``TEN_TO_ELEVEN_DAYS``THIRTEEN_TO_FOURTEEN_DAYS``THIRTY_TO_FORTY_FIVE_DAYS``THREE_TO_FOUR_DAYS``TWELVE_TO_THIRTEEN_DAYS``TWENTY_ONE_TO_THIRTY_DAYS``TWO_TO_THREE_DAYS``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ConversionLagBucketEnum.ConversionLagBucket` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.conversion_adjustment. Plus: segments.conversion_adjustment, [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt). Except: segments.conversion_lag_bucket.

## segments.conversion_or_adjustment_lag_bucket

Field descriptionAn enum value representing the number of days between the impression and
the conversion or between the impression and adjustments to the conversion.
Category`SEGMENT` Data Type`ENUM`
`ADJUSTMENT_EIGHT_TO_NINE_DAYS``ADJUSTMENT_ELEVEN_TO_TWELVE_DAYS``ADJUSTMENT_FIVE_TO_SIX_DAYS``ADJUSTMENT_FORTY_FIVE_TO_SIXTY_DAYS``ADJUSTMENT_FOURTEEN_TO_TWENTY_ONE_DAYS``ADJUSTMENT_FOUR_TO_FIVE_DAYS``ADJUSTMENT_LESS_THAN_ONE_DAY``ADJUSTMENT_NINETY_TO_ONE_HUNDRED_AND_FORTY_FIVE_DAYS``ADJUSTMENT_NINE_TO_TEN_DAYS``ADJUSTMENT_ONE_TO_TWO_DAYS``ADJUSTMENT_SEVEN_TO_EIGHT_DAYS``ADJUSTMENT_SIXTY_TO_NINETY_DAYS``ADJUSTMENT_SIX_TO_SEVEN_DAYS``ADJUSTMENT_TEN_TO_ELEVEN_DAYS``ADJUSTMENT_THIRTEEN_TO_FOURTEEN_DAYS``ADJUSTMENT_THIRTY_TO_FORTY_FIVE_DAYS``ADJUSTMENT_THREE_TO_FOUR_DAYS``ADJUSTMENT_TWELVE_TO_THIRTEEN_DAYS``ADJUSTMENT_TWENTY_ONE_TO_THIRTY_DAYS``ADJUSTMENT_TWO_TO_THREE_DAYS``ADJUSTMENT_UNKNOWN``CONVERSION_EIGHT_TO_NINE_DAYS``CONVERSION_ELEVEN_TO_TWELVE_DAYS``CONVERSION_FIVE_TO_SIX_DAYS``CONVERSION_FORTY_FIVE_TO_SIXTY_DAYS``CONVERSION_FOURTEEN_TO_TWENTY_ONE_DAYS``CONVERSION_FOUR_TO_FIVE_DAYS``CONVERSION_LESS_THAN_ONE_DAY``CONVERSION_NINE_TO_TEN_DAYS``CONVERSION_ONE_TO_TWO_DAYS``CONVERSION_SEVEN_TO_EIGHT_DAYS``CONVERSION_SIXTY_TO_NINETY_DAYS``CONVERSION_SIX_TO_SEVEN_DAYS``CONVERSION_TEN_TO_ELEVEN_DAYS``CONVERSION_THIRTEEN_TO_FOURTEEN_DAYS``CONVERSION_THIRTY_TO_FORTY_FIVE_DAYS``CONVERSION_THREE_TO_FOUR_DAYS``CONVERSION_TWELVE_TO_THIRTEEN_DAYS``CONVERSION_TWENTY_ONE_TO_THIRTY_DAYS``CONVERSION_TWO_TO_THREE_DAYS``CONVERSION_UNKNOWN``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.conversion_adjustment. Plus: segments.conversion_adjustment, [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt). Except: segments.conversion_or_adjustment_lag_bucket.

## segments.conversion_value_rule_primary_dimension

Field descriptionPrimary dimension of applied conversion value rules.
NO_RULE_APPLIED shows the total recorded value of conversions that
do not have a value rule applied.
ORIGINAL shows the original value of conversions to which a value rule
has been applied.
GEO_LOCATION, DEVICE, AUDIENCE, ITINERARY show the net adjustment after
value rules were applied.
Category`SEGMENT` Data Type`ENUM`
`AUDIENCE``DEVICE``GEO_LOCATION``ITINERARY``LOYALTY_MEMBERSHIP``MULTIPLE``NEW_VS_RETURNING_USER``NO_RULE_APPLIED``ORIGINAL``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ConversionValueRulePrimaryDimensionEnum.ConversionValueRulePrimaryDimension` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt)

**Segments:** date, day_of_week, month, new_versus_returning_customers, quarter, week, year

**Metrics:** all_conversions_value, all_conversions_value_by_conversion_date, conversions_value, conversions_value_by_conversion_date, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date

## segments.date

Field descriptionDate to which metrics apply.
yyyy-MM-dd format, for example, 2018-04-17.
Category`SEGMENT` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_combination_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_combination_view.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [android_privacy_shared_key_google_ad_group](https://developers.google.com/google-ads/api/fields/v26/android_privacy_shared_key_google_ad_group.md.txt), [android_privacy_shared_key_google_campaign](https://developers.google.com/google-ads/api/fields/v26/android_privacy_shared_key_google_campaign.md.txt), [android_privacy_shared_key_google_network_type](https://developers.google.com/google-ads/api/fields/v26/android_privacy_shared_key_google_network_type.md.txt), [app_top_combination_view](https://developers.google.com/google-ads/api/fields/v26/app_top_combination_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_group_top_combination_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_top_combination_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_budget](https://developers.google.com/google-ads/api/fields/v26/campaign_budget.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [detail_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_content_suitability_placement_view.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [dynamic_search_ads_search_term_view](https://developers.google.com/google-ads/api/fields/v26/dynamic_search_ads_search_term_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_content_suitability_placement_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [hotel_reconciliation](https://developers.google.com/google-ads/api/fields/v26/hotel_reconciliation.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [lift_measurement_age_range](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_age_range.md.txt), [lift_measurement_campaign](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_campaign.md.txt), [lift_measurement_config](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_config.md.txt), [lift_measurement_device](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_device.md.txt), [lift_measurement_gender](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_gender.md.txt), [lift_measurement_video](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_video.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [per_store_view](https://developers.google.com/google-ads/api/fields/v26/per_store_view.md.txt), [performance_max_placement_view](https://developers.google.com/google-ads/api/fields/v26/performance_max_placement_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_destination_type, ad_format_type, ad_group, ad_network_type, ad_sub_format_type, ad_sub_network_type, ad_using_product_data, ad_using_video, adjusted_age_range, adjusted_gender, advance_booking_window, asset_group, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, auction_insight_domain, brand_lift_measurement_type, budget_campaign_association_status.campaign, budget_campaign_association_status.status, campaign, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, conversion_value_rule_primary_dimension, day_of_week, device, external_activity_id, external_conversion_source, geo_target_airport, geo_target_canton, geo_target_city, geo_target_country, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, interaction_on_this_extension, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, loyalty_membership, match_type, mobile_device_platform, month, month_of_year, new_versus_returning_customers, partner_hotel_id, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_sold_brand, product_sold_category_level1, product_sold_category_level2, product_sold_category_level3, product_sold_category_level4, product_sold_category_level5, product_sold_condition, product_sold_custom_attribute0, product_sold_custom_attribute1, product_sold_custom_attribute2, product_sold_custom_attribute3, product_sold_custom_attribute4, product_sold_item_id, product_sold_title, product_sold_type_l1, product_sold_type_l2, product_sold_type_l3, product_sold_type_l4, product_sold_type_l5, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, search_engine_results_page_type, search_lift_keyword_bundle, search_property, search_subcategory, search_term, search_term_match_source, search_term_match_type, search_term_targeting_status, sk_ad_network_ad_event_type, sk_ad_network_attribution_credit, sk_ad_network_coarse_conversion_value, sk_ad_network_fine_conversion_value, sk_ad_network_postback_sequence_index, sk_ad_network_redistributed_fine_conversion_value, sk_ad_network_source_app.sk_ad_network_source_app_id, sk_ad_network_source_domain, sk_ad_network_source_type, sk_ad_network_user_type, sk_ad_network_version, slot, start_date, start_day_of_week, travel_destination_city, travel_destination_country, travel_destination_region, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, webpage, week, year

**Metrics:** absolute_brand_lift, absolute_brand_lift_p90_lower_bound, absolute_brand_lift_p90_upper_bound, absolute_brand_lift_p_value, absolute_top_impression_percentage, active_view_audibility_invalid_givt_measurable_impressions_rate, active_view_audibility_invalid_measurable_impressions_rate, active_view_audibility_measurable_impressions, active_view_audibility_measurable_impressions_rate, active_view_audible_impressions, active_view_audible_impressions_rate, active_view_audible_quartile_p100_rate, active_view_audible_quartile_p25_rate, active_view_audible_quartile_p50_rate, active_view_audible_quartile_p75_rate, active_view_audible_thirty_seconds_impressions, active_view_audible_thirty_seconds_impressions_rate, active_view_audible_two_seconds_impressions, active_view_audible_two_seconds_impressions_rate, active_view_cpm, active_view_ctr, active_view_impressions, active_view_measurability, active_view_measurable_cost_micros, active_view_measurable_impressions, active_view_viewability, all_average_cart_size, all_average_order_value_micros, all_conversions, all_conversions_by_conversion_date, all_conversions_from_click_to_call, all_conversions_from_directions, all_conversions_from_interactions_rate, all_conversions_from_interactions_value_per_interaction, all_conversions_from_location_asset_click_to_call, all_conversions_from_location_asset_directions, all_conversions_from_location_asset_menu, all_conversions_from_location_asset_order, all_conversions_from_location_asset_other_engagement, all_conversions_from_location_asset_store_visits, all_conversions_from_location_asset_website, all_conversions_from_menu, all_conversions_from_order, all_conversions_from_other_engagement, all_conversions_from_store_visit, all_conversions_from_store_website, all_conversions_value, all_conversions_value_by_conversion_date, all_conversions_value_per_cost, all_cost_of_goods_sold_micros, all_cross_sell_cost_of_goods_sold_micros, all_cross_sell_gross_profit_micros, all_cross_sell_revenue_micros, all_cross_sell_units_sold, all_gross_profit_margin, all_gross_profit_micros, all_lead_cost_of_goods_sold_micros, all_lead_gross_profit_micros, all_lead_revenue_micros, all_lead_units_sold, all_new_customer_lifetime_value, all_orders, all_revenue_micros, all_units_sold, all_value_adjustment, auction_insight_search_absolute_top_impression_percentage, auction_insight_search_impression_share, auction_insight_search_outranking_share, auction_insight_search_overlap_rate, auction_insight_search_position_above_rate, auction_insight_search_top_impression_percentage, average_cart_size, average_cost, average_cpc, average_cpe, average_cpm, average_impression_frequency_per_user, average_order_value_micros, average_page_views, average_target_cpa_micros, average_target_roas, average_time_on_site, average_video_watch_time_duration_millis, benchmark_average_max_cpc, benchmark_ctr, biddable_app_install_conversions, biddable_app_post_install_conversions, biddable_cohort_app_post_install_conversions, bounce_rate, brand_lift_baseline_positive_response_rate, brand_lift_baseline_positive_response_rate_p90_lower_bound, brand_lift_baseline_positive_response_rate_p90_upper_bound, brand_lift_exposed_positive_responder_fractional_cookies, brand_lift_exposed_positive_responder_fractional_cookies_p90_lower_bound, brand_lift_exposed_positive_responder_fractional_cookies_p90_upper_bound, brand_lift_exposed_positive_response_rate, brand_lift_exposed_positive_response_rate_p90_lower_bound, brand_lift_exposed_positive_response_rate_p90_upper_bound, brand_lift_responses_exposed, brand_lift_responses_suppressed, brand_lift_suppressed_positive_responder_fractional_cookies, brand_lift_suppressed_positive_responder_fractional_cookies_p90_lower_bound, brand_lift_suppressed_positive_responder_fractional_cookies_p90_upper_bound, brand_lift_total_responses, clicks, clicks_margin_of_error, clicks_p_value, clicks_point_estimate, clicks_unique_query_clusters, combined_clicks, combined_clicks_per_query, combined_queries, content_budget_lost_impression_share, content_impression_share, content_rank_lost_impression_share, control_clicks, control_conversion_value, control_conversion_value_per_cost, control_conversions, control_cost_micros, control_cost_per_conversion, control_impressions, conversion_value_change_point_estimate, conversion_value_margin_of_error, conversion_value_p_value, conversion_value_per_cost_change_point_estimate, conversion_value_per_cost_margin_of_error, conversion_value_per_cost_p_value, conversions, conversions_absolute_change_margin_of_error, conversions_absolute_change_p_value, conversions_absolute_change_point_estimate, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_from_interactions_value_per_interaction, conversions_unique_query_clusters, conversions_value, conversions_value_by_conversion_date, conversions_value_per_cost, cost_converted_currency_per_platform_comparable_conversion, cost_micros, cost_micros_change_point_estimate, cost_micros_margin_of_error, cost_micros_p_value, cost_of_goods_sold_micros, cost_per_all_conversions, cost_per_conversion, cost_per_conversion_change_point_estimate, cost_per_conversion_margin_of_error, cost_per_conversion_p_value, cost_per_current_model_attributed_conversion, cost_per_lifted_cookie, cost_per_lifted_cookie_p90_lower_bound, cost_per_lifted_cookie_p90_upper_bound, cost_per_platform_comparable_conversion, coviewed_impressions, cross_device_conversions, cross_device_conversions_by_conversion_date, cross_device_conversions_value_by_conversion_date, cross_device_conversions_value_micros, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, ctr, current_model_attributed_conversions, current_model_attributed_conversions_from_interactions_rate, current_model_attributed_conversions_from_interactions_value_per_interaction, current_model_attributed_conversions_value, current_model_attributed_conversions_value_per_cost, eligible_impressions_from_location_asset_store_reach, engagement_rate, engagements, fractional_lifted_cookies, fractional_lifted_cookies_p90_lower_bound, fractional_lifted_cookies_p90_upper_bound, general_invalid_click_rate, general_invalid_clicks, gmail_forwards, gmail_saves, gmail_secondary_clicks, gross_profit_margin, gross_profit_micros, headroom_brand_lift, headroom_brand_lift_p90_lower_bound, headroom_brand_lift_p90_upper_bound, historical_creative_quality_score, historical_landing_page_quality_score, historical_quality_score, historical_search_predicted_ctr, hotel_average_lead_value_micros, hotel_commission_rate_micros, hotel_eligible_impressions, hotel_expected_commission_cost, hotel_price_difference_percentage, impressions, impressions_margin_of_error, impressions_p_value, impressions_point_estimate, impressions_unique_query_clusters, incremental_searches_p_value, interaction_event_types, interaction_rate, interactions, invalid_click_rate, invalid_clicks, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, message_chat_rate, message_chats, message_impressions, mobile_friendly_clicks_percentage, new_customer_lifetime_value, normalized_incremental_searches, normalized_incremental_searches_p90_lower_bound, normalized_incremental_searches_p90_upper_bound, normalized_incremental_searches_per_cost, normalized_incremental_searches_per_cost_p90_lower_bound, normalized_incremental_searches_per_cost_p90_upper_bound, normalized_incremental_searches_per_impression, normalized_incremental_searches_per_impression_p90_lower_bound, normalized_incremental_searches_per_impression_p90_upper_bound, orders, organic_clicks, organic_clicks_per_query, organic_impressions, organic_impressions_per_query, organic_queries, original_conversion_value, percent_new_visitors, phone_calls, phone_impressions, phone_through_rate, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_from_interactions_rate, platform_comparable_conversions_from_interactions_value_per_interaction, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, platform_comparable_conversions_value_per_cost, primary_impressions, publisher_organic_clicks, publisher_purchased_clicks, publisher_unknown_clicks, relative_brand_lift, relative_brand_lift_p90_lower_bound, relative_brand_lift_p90_upper_bound, relative_ctr, relative_search_lift, relative_search_lift_p90_lower_bound, relative_search_lift_p90_upper_bound, revenue_micros, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_budget_lost_top_impression_share, search_click_share, search_exact_match_impression_share, search_impression_share, search_lift_cost_micros, search_lift_impressions, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, search_rank_lost_top_impression_share, search_top_impression_share, search_volume, sk_ad_network_installs, sk_ad_network_total_conversions, speed_score, svr, top_impression_percentage, trueview_average_cpv, unique_users, unique_users_eight_plus, unique_users_eight_plus_info, unique_users_five_plus, unique_users_five_plus_info, unique_users_four_plus, unique_users_four_plus_info, unique_users_info, unique_users_nine_plus, unique_users_nine_plus_info, unique_users_seven_plus, unique_users_seven_plus_info, unique_users_six_plus, unique_users_six_plus_info, unique_users_ten_plus, unique_users_ten_plus_info, unique_users_three_plus, unique_users_three_plus_info, unique_users_two_plus, unique_users_two_plus_info, units_sold, valid_accelerated_mobile_pages_clicks_percentage, value_adjustment, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date, vertical_ads_average_booking_value_micros, vertical_ads_potential_impressions, vertical_ads_price_difference_percentage, video_quartile_p100_rate, video_quartile_p25_rate, video_quartile_p50_rate, video_quartile_p75_rate, video_trueview_view_rate, video_trueview_view_rate_in_feed, video_trueview_view_rate_in_stream, video_trueview_view_rate_shorts, video_trueview_views, video_watch_time_duration_millis, view_through_conversions, view_through_conversions_from_location_asset_click_to_call, view_through_conversions_from_location_asset_directions, view_through_conversions_from_location_asset_menu, view_through_conversions_from_location_asset_order, view_through_conversions_from_location_asset_other_engagement, view_through_conversions_from_location_asset_store_visits, view_through_conversions_from_location_asset_website, youtube_comments, youtube_likes, youtube_shares

## segments.day_of_week

Field descriptionDay of the week, for example, MONDAY.
Category`SEGMENT` Data Type`ENUM`
`FRIDAY``MONDAY``SATURDAY``SUNDAY``THURSDAY``TUESDAY``UNKNOWN``UNSPECIFIED``WEDNESDAY` Type URL`google.ads.googleads.v26.enums.DayOfWeekEnum.DayOfWeek` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_combination_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_combination_view.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [app_top_combination_view](https://developers.google.com/google-ads/api/fields/v26/app_top_combination_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_group_top_combination_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_top_combination_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [dynamic_search_ads_search_term_view](https://developers.google.com/google-ads/api/fields/v26/dynamic_search_ads_search_term_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [per_store_view](https://developers.google.com/google-ads/api/fields/v26/per_store_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_destination_type, ad_format_type, ad_network_type, ad_sub_format_type, ad_sub_network_type, ad_using_product_data, ad_using_video, adjusted_age_range, adjusted_gender, advance_booking_window, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, auction_insight_domain, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, conversion_value_rule_primary_dimension, date, device, external_activity_id, external_conversion_source, geo_target_airport, geo_target_canton, geo_target_city, geo_target_country, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, loyalty_membership, match_type, month, month_of_year, new_versus_returning_customers, partner_hotel_id, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_sold_brand, product_sold_category_level1, product_sold_category_level2, product_sold_category_level3, product_sold_category_level4, product_sold_category_level5, product_sold_condition, product_sold_custom_attribute0, product_sold_custom_attribute1, product_sold_custom_attribute2, product_sold_custom_attribute3, product_sold_custom_attribute4, product_sold_item_id, product_sold_title, product_sold_type_l1, product_sold_type_l2, product_sold_type_l3, product_sold_type_l4, product_sold_type_l5, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, search_engine_results_page_type, search_term_match_source, search_term_match_type, search_term_targeting_status, sk_ad_network_ad_event_type, sk_ad_network_attribution_credit, sk_ad_network_coarse_conversion_value, sk_ad_network_fine_conversion_value, sk_ad_network_postback_sequence_index, sk_ad_network_redistributed_fine_conversion_value, sk_ad_network_source_app.sk_ad_network_source_app_id, sk_ad_network_source_domain, sk_ad_network_source_type, sk_ad_network_user_type, sk_ad_network_version, slot, start_date, start_day_of_week, travel_destination_city, travel_destination_country, travel_destination_region, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, webpage, week, year

**Metrics:** absolute_top_impression_percentage, active_view_audibility_invalid_givt_measurable_impressions_rate, active_view_audibility_invalid_measurable_impressions_rate, active_view_audibility_measurable_impressions, active_view_audibility_measurable_impressions_rate, active_view_audible_impressions, active_view_audible_impressions_rate, active_view_audible_quartile_p100_rate, active_view_audible_quartile_p25_rate, active_view_audible_quartile_p50_rate, active_view_audible_quartile_p75_rate, active_view_audible_thirty_seconds_impressions, active_view_audible_thirty_seconds_impressions_rate, active_view_audible_two_seconds_impressions, active_view_audible_two_seconds_impressions_rate, active_view_cpm, active_view_ctr, active_view_impressions, active_view_measurability, active_view_measurable_cost_micros, active_view_measurable_impressions, active_view_viewability, all_average_cart_size, all_average_order_value_micros, all_conversions, all_conversions_by_conversion_date, all_conversions_from_click_to_call, all_conversions_from_directions, all_conversions_from_interactions_rate, all_conversions_from_interactions_value_per_interaction, all_conversions_from_menu, all_conversions_from_order, all_conversions_from_other_engagement, all_conversions_from_store_visit, all_conversions_from_store_website, all_conversions_value, all_conversions_value_by_conversion_date, all_conversions_value_per_cost, all_cost_of_goods_sold_micros, all_cross_sell_cost_of_goods_sold_micros, all_cross_sell_gross_profit_micros, all_cross_sell_revenue_micros, all_cross_sell_units_sold, all_gross_profit_margin, all_gross_profit_micros, all_lead_cost_of_goods_sold_micros, all_lead_gross_profit_micros, all_lead_revenue_micros, all_lead_units_sold, all_new_customer_lifetime_value, all_orders, all_revenue_micros, all_units_sold, all_value_adjustment, auction_insight_search_absolute_top_impression_percentage, auction_insight_search_impression_share, auction_insight_search_outranking_share, auction_insight_search_overlap_rate, auction_insight_search_position_above_rate, auction_insight_search_top_impression_percentage, average_cart_size, average_cost, average_cpc, average_cpe, average_cpm, average_order_value_micros, average_page_views, average_time_on_site, average_video_watch_time_duration_millis, benchmark_average_max_cpc, benchmark_ctr, bounce_rate, clicks, combined_clicks, combined_clicks_per_query, combined_queries, content_budget_lost_impression_share, content_impression_share, content_rank_lost_impression_share, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_from_interactions_value_per_interaction, conversions_value, conversions_value_by_conversion_date, conversions_value_per_cost, cost_converted_currency_per_platform_comparable_conversion, cost_micros, cost_of_goods_sold_micros, cost_per_all_conversions, cost_per_conversion, cost_per_current_model_attributed_conversion, cost_per_platform_comparable_conversion, cross_device_conversions, cross_device_conversions_by_conversion_date, cross_device_conversions_value_by_conversion_date, cross_device_conversions_value_micros, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, ctr, current_model_attributed_conversions, current_model_attributed_conversions_from_interactions_rate, current_model_attributed_conversions_from_interactions_value_per_interaction, current_model_attributed_conversions_value, current_model_attributed_conversions_value_per_cost, engagement_rate, engagements, general_invalid_click_rate, general_invalid_clicks, gmail_forwards, gmail_saves, gmail_secondary_clicks, gross_profit_margin, gross_profit_micros, hotel_average_lead_value_micros, hotel_eligible_impressions, hotel_price_difference_percentage, impressions, interaction_event_types, interaction_rate, interactions, invalid_click_rate, invalid_clicks, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, message_chat_rate, message_chats, message_impressions, mobile_friendly_clicks_percentage, new_customer_lifetime_value, orders, organic_clicks, organic_clicks_per_query, organic_impressions, organic_impressions_per_query, organic_queries, original_conversion_value, percent_new_visitors, phone_calls, phone_impressions, phone_through_rate, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_from_interactions_rate, platform_comparable_conversions_from_interactions_value_per_interaction, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, platform_comparable_conversions_value_per_cost, publisher_organic_clicks, publisher_purchased_clicks, publisher_unknown_clicks, relative_ctr, revenue_micros, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_budget_lost_top_impression_share, search_click_share, search_exact_match_impression_share, search_impression_share, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, search_rank_lost_top_impression_share, search_top_impression_share, sk_ad_network_installs, sk_ad_network_total_conversions, speed_score, svr, top_impression_percentage, trueview_average_cpv, units_sold, valid_accelerated_mobile_pages_clicks_percentage, value_adjustment, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date, vertical_ads_average_booking_value_micros, vertical_ads_potential_impressions, vertical_ads_price_difference_percentage, video_quartile_p100_rate, video_quartile_p25_rate, video_quartile_p50_rate, video_quartile_p75_rate, video_trueview_view_rate, video_trueview_view_rate_in_feed, video_trueview_view_rate_in_stream, video_trueview_view_rate_shorts, video_trueview_views, video_watch_time_duration_millis, view_through_conversions

## segments.device

Field descriptionDevice to which metrics apply.
Category`SEGMENT` Data Type`ENUM`
`CONNECTED_TV``DESKTOP``MOBILE``OTHER``TABLET``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.DeviceEnum.Device` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [lift_measurement_config](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_config.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_destination_type, ad_format_type, ad_network_type, ad_sub_format_type, ad_sub_network_type, adjusted_age_range, adjusted_gender, advance_booking_window, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, auction_insight_domain, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_lift_conversion_category, conversion_lift_end_date, conversion_lift_included_conversion_action_types, conversion_lift_start_date, date, day_of_week, external_activity_id, external_conversion_source, geo_target_airport, geo_target_canton, geo_target_city, geo_target_country, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, interaction_on_this_extension, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, match_type, month, month_of_year, partner_hotel_id, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_sold_brand, product_sold_category_level1, product_sold_category_level2, product_sold_category_level3, product_sold_category_level4, product_sold_category_level5, product_sold_condition, product_sold_custom_attribute0, product_sold_custom_attribute1, product_sold_custom_attribute2, product_sold_custom_attribute3, product_sold_custom_attribute4, product_sold_item_id, product_sold_title, product_sold_type_l1, product_sold_type_l2, product_sold_type_l3, product_sold_type_l4, product_sold_type_l5, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, search_engine_results_page_type, search_lift_keyword_bundle, search_term_match_source, search_term_match_type, search_term_targeting_status, slot, start_date, start_day_of_week, travel_destination_city, travel_destination_country, travel_destination_region, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

**Metrics:** absolute_top_impression_percentage, active_view_audibility_invalid_givt_measurable_impressions_rate, active_view_audibility_invalid_measurable_impressions_rate, active_view_audibility_measurable_impressions, active_view_audibility_measurable_impressions_rate, active_view_audible_impressions, active_view_audible_impressions_rate, active_view_audible_quartile_p100_rate, active_view_audible_quartile_p25_rate, active_view_audible_quartile_p50_rate, active_view_audible_quartile_p75_rate, active_view_audible_thirty_seconds_impressions, active_view_audible_thirty_seconds_impressions_rate, active_view_audible_two_seconds_impressions, active_view_audible_two_seconds_impressions_rate, active_view_cpm, active_view_ctr, active_view_impressions, active_view_measurability, active_view_measurable_cost_micros, active_view_measurable_impressions, active_view_viewability, all_average_cart_size, all_average_order_value_micros, all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_from_interactions_value_per_interaction, all_conversions_value, all_conversions_value_by_conversion_date, all_conversions_value_per_cost, all_cost_of_goods_sold_micros, all_cross_sell_cost_of_goods_sold_micros, all_cross_sell_gross_profit_micros, all_cross_sell_revenue_micros, all_cross_sell_units_sold, all_gross_profit_margin, all_gross_profit_micros, all_lead_cost_of_goods_sold_micros, all_lead_gross_profit_micros, all_lead_revenue_micros, all_lead_units_sold, all_orders, all_revenue_micros, all_units_sold, auction_insight_search_absolute_top_impression_percentage, auction_insight_search_impression_share, auction_insight_search_outranking_share, auction_insight_search_overlap_rate, auction_insight_search_position_above_rate, auction_insight_search_top_impression_percentage, average_cart_size, average_cost, average_cpc, average_cpe, average_cpm, average_impression_frequency_per_user, average_order_value_micros, average_video_watch_time_duration_millis, clicks, combined_clicks, combined_clicks_per_query, combined_queries, content_budget_lost_impression_share, content_impression_share, content_rank_lost_impression_share, conversion_lift_baseline_conversion_value, conversion_lift_baseline_conversions, conversion_lift_exposed_conversion_value, conversion_lift_exposed_conversions, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_from_interactions_value_per_interaction, conversions_value, conversions_value_by_conversion_date, conversions_value_per_cost, cost_converted_currency_per_platform_comparable_conversion, cost_micros, cost_of_goods_sold_micros, cost_per_all_conversions, cost_per_conversion, cost_per_current_model_attributed_conversion, cost_per_incremental_conversion, cost_per_incremental_conversion_p90_lower_bound, cost_per_incremental_conversion_p90_upper_bound, cost_per_platform_comparable_conversion, coviewed_impressions, cross_device_conversions, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, ctr, current_model_attributed_conversions, current_model_attributed_conversions_from_interactions_rate, current_model_attributed_conversions_from_interactions_value_per_interaction, current_model_attributed_conversions_value, current_model_attributed_conversions_value_per_cost, engagement_rate, engagements, general_invalid_click_rate, general_invalid_clicks, gmail_forwards, gmail_saves, gmail_secondary_clicks, gross_profit_margin, gross_profit_micros, hotel_average_lead_value_micros, hotel_eligible_impressions, hotel_price_difference_percentage, impressions, incremental_conversion_value, incremental_conversion_value_p90_lower_bound, incremental_conversion_value_p90_upper_bound, incremental_conversion_value_p_value, incremental_conversion_value_per_cost, incremental_conversion_value_per_cost_p90_lower_bound, incremental_conversion_value_per_cost_p90_upper_bound, incremental_conversions, incremental_conversions_p90_lower_bound, incremental_conversions_p90_upper_bound, incremental_conversions_p_value, incremental_searches_p_value, interaction_event_types, interaction_rate, interactions, invalid_click_rate, invalid_clicks, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, mobile_friendly_clicks_percentage, normalized_incremental_searches, normalized_incremental_searches_p90_lower_bound, normalized_incremental_searches_p90_upper_bound, normalized_incremental_searches_per_cost, normalized_incremental_searches_per_cost_p90_lower_bound, normalized_incremental_searches_per_cost_p90_upper_bound, normalized_incremental_searches_per_impression, normalized_incremental_searches_per_impression_p90_lower_bound, normalized_incremental_searches_per_impression_p90_upper_bound, orders, organic_clicks, organic_clicks_per_query, organic_impressions, organic_impressions_per_query, organic_queries, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_from_interactions_rate, platform_comparable_conversions_from_interactions_value_per_interaction, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, platform_comparable_conversions_value_per_cost, primary_impressions, relative_conversion_lift, relative_conversion_lift_p90_lower_bound, relative_conversion_lift_p90_upper_bound, relative_conversion_value_lift, relative_conversion_value_lift_p90_lower_bound, relative_conversion_value_lift_p90_upper_bound, relative_search_lift, relative_search_lift_p90_lower_bound, relative_search_lift_p90_upper_bound, revenue_micros, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_budget_lost_top_impression_share, search_click_share, search_exact_match_impression_share, search_impression_share, search_lift_cost_micros, search_lift_impressions, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, search_rank_lost_top_impression_share, search_top_impression_share, speed_score, svr, top_impression_percentage, trueview_average_cpv, unique_users, unique_users_eight_plus, unique_users_eight_plus_info, unique_users_five_plus, unique_users_five_plus_info, unique_users_four_plus, unique_users_four_plus_info, unique_users_info, unique_users_nine_plus, unique_users_nine_plus_info, unique_users_seven_plus, unique_users_seven_plus_info, unique_users_six_plus, unique_users_six_plus_info, unique_users_ten_plus, unique_users_ten_plus_info, unique_users_three_plus, unique_users_three_plus_info, unique_users_two_plus, unique_users_two_plus_info, units_sold, valid_accelerated_mobile_pages_clicks_percentage, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date, vertical_ads_average_booking_value_micros, vertical_ads_potential_impressions, vertical_ads_price_difference_percentage, video_quartile_p100_rate, video_quartile_p25_rate, video_quartile_p50_rate, video_quartile_p75_rate, video_trueview_view_rate, video_trueview_view_rate_in_feed, video_trueview_view_rate_in_stream, video_trueview_view_rate_shorts, video_trueview_views, video_watch_time_duration_millis, view_through_conversions, youtube_comments, youtube_likes, youtube_shares

## segments.external_conversion_source

Field descriptionExternal conversion source.
Category`SEGMENT` Data Type`ENUM`
`AD_CALL_METRICS``ANALYTICS``ANALYTICS_SEARCH_ADS_360``ANDROID_FIRST_OPEN``ANDROID_IN_APP``APP_UNSPECIFIED``CLICK_TO_CALL``DISPLAY_AND_VIDEO_360_FLOODLIGHT``FIREBASE``FIREBASE_SEARCH_ADS_360``FLOODLIGHT``GOOGLE_ATTRIBUTION``GOOGLE_HOSTED``GOOGLE_PLAY``IOS_FIRST_OPEN``IOS_IN_APP``SALESFORCE``SEARCH_ADS_360``STORE_SALES``STORE_SALES_CRM``STORE_SALES_DIRECT_UPLOAD``STORE_SALES_PAYMENT_NETWORK``STORE_VISITS``THIRD_PARTY_APP_ANALYTICS``UNKNOWN``UNSPECIFIED``UPLOAD``UPLOAD_CALLS``WEBPAGE``WEBSITE_CALL_METRICS` Type URL`google.ads.googleads.v26.enums.ExternalConversionSourceEnum.ExternalConversionSource` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.conversion_action. Plus: segments.conversion_action. Except: [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [lift_measurement_config](https://developers.google.com/google-ads/api/fields/v26/lift_measurement_config.md.txt), metrics.biddable_app_install_conversions, metrics.biddable_app_post_install_conversions, metrics.conversion_lift_baseline_conversion_value, metrics.conversion_lift_baseline_conversions, metrics.conversion_lift_exposed_conversion_value, metrics.conversion_lift_exposed_conversions, metrics.cost_per_incremental_conversion, metrics.cost_per_incremental_conversion_p90_lower_bound, metrics.cost_per_incremental_conversion_p90_upper_bound, metrics.incremental_conversion_value, metrics.incremental_conversion_value_p90_lower_bound, metrics.incremental_conversion_value_p90_upper_bound, metrics.incremental_conversion_value_p_value, metrics.incremental_conversion_value_per_cost, metrics.incremental_conversion_value_per_cost_p90_lower_bound, metrics.incremental_conversion_value_per_cost_p90_upper_bound, metrics.incremental_conversions, metrics.incremental_conversions_p90_lower_bound, metrics.incremental_conversions_p90_upper_bound, metrics.incremental_conversions_p_value, metrics.relative_conversion_lift, metrics.relative_conversion_lift_p90_lower_bound, metrics.relative_conversion_lift_p90_upper_bound, metrics.relative_conversion_value_lift, metrics.relative_conversion_value_lift_p90_lower_bound, metrics.relative_conversion_value_lift_p90_upper_bound, segments.age_range, segments.conversion_lift_conversion_category, segments.conversion_lift_end_date, segments.conversion_lift_included_conversion_action_types, segments.conversion_lift_start_date, segments.country, segments.country_localized_name, segments.external_conversion_source, segments.gender.

## segments.geo_target_airport

Field descriptionResource name of the geo target constant that represents an airport.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, conversion_action, conversion_action_category, conversion_action_name, date, day_of_week, device, external_conversion_source, geo_target_canton, geo_target_city, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, month, month_of_year, quarter, week, year

**Metrics:** all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_value, all_conversions_value_by_conversion_date, average_cost, average_cpc, average_cpm, clicks, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_value, conversions_value_by_conversion_date, cost_micros, cost_per_all_conversions, cost_per_conversion, cross_device_conversions, cross_device_conversions_by_conversion_date, cross_device_conversions_value_by_conversion_date, ctr, impressions, interaction_event_types, interaction_rate, interactions, trueview_average_cpv, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, video_trueview_view_rate, video_trueview_views, view_through_conversions

## segments.geo_target_city

Field descriptionResource name of the geo target constant that represents a city.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.geo_target_airport. Plus: metrics.absolute_top_impression_percentage, metrics.top_impression_percentage, segments.geo_target_airport. Except: segments.geo_target_city.

## segments.geo_target_country

Field descriptionResource name of the geo target constant that represents a country.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, advance_booking_window, date, day_of_week, device, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, length_of_booking, month, partner_hotel_id, quarter, start_date, start_day_of_week, travel_destination_city, travel_destination_country, travel_destination_region, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

**Metrics:** absolute_top_impression_percentage, all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_value, all_conversions_value_by_conversion_date, average_cpc, average_cpm, clicks, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_value, conversions_value_by_conversion_date, cost_micros, cost_per_all_conversions, cost_per_conversion, cross_device_conversions, cross_device_conversions_by_conversion_date, cross_device_conversions_value_by_conversion_date, ctr, hotel_average_lead_value_micros, hotel_eligible_impressions, hotel_price_difference_percentage, impressions, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_budget_lost_top_impression_share, search_click_share, search_impression_share, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, search_rank_lost_top_impression_share, search_top_impression_share, top_impression_percentage, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, vertical_ads_average_booking_value_micros, vertical_ads_potential_impressions, vertical_ads_price_difference_percentage

## segments.geo_target_metro

Field descriptionResource name of the geo target constant that represents a metro.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.geo_target_airport. Plus: metrics.absolute_top_impression_percentage, metrics.top_impression_percentage, segments.geo_target_airport. Except: segments.geo_target_metro.

## segments.geo_target_region

Field descriptionResource name of the geo target constant that represents a region.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.geo_target_airport. Plus: metrics.absolute_top_impression_percentage, metrics.top_impression_percentage, segments.geo_target_airport. Except: segments.geo_target_region.

## segments.hour

Field descriptionHour of day as a number between 0 and 23, inclusive.
Category`SEGMENT` Data Type`INT32` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_destination_type, ad_network_type, ad_sub_network_type, advance_booking_window, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, device, external_activity_id, external_conversion_source, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, length_of_booking, month, month_of_year, new_versus_returning_customers, partner_hotel_id, quarter, start_date, start_day_of_week, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

**Metrics:** absolute_top_impression_percentage, active_view_audibility_invalid_givt_measurable_impressions_rate, active_view_audibility_invalid_measurable_impressions_rate, active_view_audibility_measurable_impressions, active_view_audibility_measurable_impressions_rate, active_view_audible_impressions, active_view_audible_impressions_rate, active_view_audible_quartile_p100_rate, active_view_audible_quartile_p25_rate, active_view_audible_quartile_p50_rate, active_view_audible_quartile_p75_rate, active_view_audible_thirty_seconds_impressions, active_view_audible_thirty_seconds_impressions_rate, active_view_audible_two_seconds_impressions, active_view_audible_two_seconds_impressions_rate, active_view_cpm, active_view_ctr, active_view_impressions, active_view_measurability, active_view_measurable_cost_micros, active_view_measurable_impressions, active_view_viewability, all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_value, all_conversions_value_by_conversion_date, all_new_customer_lifetime_value, all_value_adjustment, average_cost, average_cpc, average_cpe, average_cpm, clicks, content_impression_share, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_value, conversions_value_by_conversion_date, cost_micros, cost_per_all_conversions, cost_per_conversion, ctr, engagement_rate, engagements, hotel_average_lead_value_micros, hotel_eligible_impressions, hotel_price_difference_percentage, impressions, interaction_event_types, interaction_rate, interactions, new_customer_lifetime_value, original_conversion_value, phone_calls, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_budget_lost_top_impression_share, search_impression_share, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, search_rank_lost_top_impression_share, search_top_impression_share, top_impression_percentage, trueview_average_cpv, value_adjustment, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, vertical_ads_average_booking_value_micros, vertical_ads_potential_impressions, vertical_ads_price_difference_percentage, video_quartile_p100_rate, video_quartile_p25_rate, video_quartile_p50_rate, video_quartile_p75_rate, video_trueview_view_rate, video_trueview_views, view_through_conversions

## segments.length_of_booking

Field descriptionLength of booking for the itinerary in days.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: segments.advance_booking_window. Except: segments.length_of_booking.

## segments.mobile_device_platform

Field descriptionMobile device platform to which metrics apply.
Category`SEGMENT` Data Type`ENUM`
`ANDROID``DESKTOP``IOS``OTHER_MOBILE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.MobileDevicePlatformEnum.MobileDevicePlatform` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** ad_destination_type, date, month, month_of_year, quarter, week, year

**Metrics:** all_conversions, all_conversions_value, clicks, conversions, conversions_value, cost_micros

## segments.month

Field descriptionMonth as represented by the date of the first day of a month. Formatted as
yyyy-MM-dd.
Category`SEGMENT` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.day_of_week. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), metrics.biddable_app_install_conversions, metrics.biddable_app_post_install_conversions, metrics.biddable_cohort_app_post_install_conversions, metrics.clicks_unique_query_clusters, metrics.conversion_last_conversion_date, metrics.conversion_last_received_request_date_time, metrics.conversions_unique_query_clusters, metrics.coviewed_impressions, metrics.historical_creative_quality_score, metrics.historical_landing_page_quality_score, metrics.historical_quality_score, metrics.historical_search_predicted_ctr, metrics.impressions_unique_query_clusters, metrics.primary_impressions, metrics.youtube_comments, metrics.youtube_likes, metrics.youtube_shares, segments.day_of_week, segments.interaction_on_this_extension, segments.mobile_device_platform, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt). Except: segments.loyalty_membership, segments.month, segments.month_of_year.

## segments.month_of_year

Field descriptionMonth of the year, for example, January.
Category`SEGMENT` Data Type`ENUM`
`APRIL``AUGUST``DECEMBER``FEBRUARY``JANUARY``JULY``JUNE``MARCH``MAY``NOVEMBER``OCTOBER``SEPTEMBER``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.MonthOfYearEnum.MonthOfYear` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [dynamic_search_ads_search_term_view](https://developers.google.com/google-ads/api/fields/v26/dynamic_search_ads_search_term_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [per_store_view](https://developers.google.com/google-ads/api/fields/v26/per_store_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** ad_destination_type, ad_network_type, ad_sub_network_type, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, click_type, conversion_action, conversion_action_category, conversion_action_name, date, day_of_week, device, external_conversion_source, geo_target_airport, geo_target_canton, geo_target_city, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hour, interaction_on_this_extension, landing_page_source, loyalty_membership, mobile_device_platform, quarter, search_engine_results_page_type, search_term_match_source, search_term_match_type, search_term_targeting_status, sk_ad_network_ad_event_type, sk_ad_network_attribution_credit, sk_ad_network_coarse_conversion_value, sk_ad_network_fine_conversion_value, sk_ad_network_postback_sequence_index, sk_ad_network_redistributed_fine_conversion_value, sk_ad_network_source_app.sk_ad_network_source_app_id, sk_ad_network_source_domain, sk_ad_network_source_type, sk_ad_network_user_type, sk_ad_network_version, slot, webpage, week, year

**Metrics:** average_cart_size, average_cost, average_cpc, average_cpe, average_cpm, average_order_value_micros, average_page_views, average_time_on_site, benchmark_ctr, biddable_app_install_conversions, biddable_app_post_install_conversions, biddable_cohort_app_post_install_conversions, bounce_rate, clicks, combined_clicks, combined_clicks_per_query, combined_queries, content_budget_lost_impression_share, content_impression_share, content_rank_lost_impression_share, cost_converted_currency_per_platform_comparable_conversion, cost_micros, cost_of_goods_sold_micros, cost_per_platform_comparable_conversion, cross_device_conversions, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, ctr, engagement_rate, engagements, gmail_forwards, gmail_saves, gmail_secondary_clicks, gross_profit_margin, gross_profit_micros, historical_creative_quality_score, historical_landing_page_quality_score, historical_quality_score, historical_search_predicted_ctr, impressions, interaction_event_types, interaction_rate, interactions, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, message_chat_rate, message_chats, message_impressions, mobile_friendly_clicks_percentage, orders, organic_clicks, organic_clicks_per_query, organic_impressions, organic_impressions_per_query, organic_queries, percent_new_visitors, phone_calls, phone_impressions, phone_through_rate, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_from_interactions_rate, platform_comparable_conversions_from_interactions_value_per_interaction, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, platform_comparable_conversions_value_per_cost, relative_ctr, revenue_micros, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_rank_lost_absolute_top_impression_share, sk_ad_network_installs, sk_ad_network_total_conversions, speed_score, units_sold, valid_accelerated_mobile_pages_clicks_percentage, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date

## segments.new_versus_returning_customers

Field descriptionThis is for segmenting conversions by whether the user is a new customer
or a returning customer. This segmentation is typically used to measure
the impact of customer acquisition goal.
Category`SEGMENT` Data Type`ENUM`
`NEW``NEW_AND_HIGH_LTV``RETURNING``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ConvertingUserPriorEngagementTypeAndLtvBucketEnum.ConvertingUserPriorEngagementTypeAndLtvBucket` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, conversion_value_rule_primary_dimension, date, day_of_week, external_conversion_source, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, match_type, month, quarter, slot, week, year

**Metrics:** all_conversions, all_conversions_by_conversion_date, all_conversions_value, all_conversions_value_by_conversion_date, all_new_customer_lifetime_value, all_value_adjustment, conversions, conversions_by_conversion_date, conversions_value, conversions_value_by_conversion_date, current_model_attributed_conversions, current_model_attributed_conversions_value, new_customer_lifetime_value, original_conversion_value, value_adjustment, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, value_per_current_model_attributed_conversion

## segments.product_aggregator_id

Field descriptionAggregator ID of the product.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_attribution_event_type, date, day_of_week, device, external_conversion_source, month, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_sold_brand, product_sold_category_level1, product_sold_category_level2, product_sold_category_level3, product_sold_category_level4, product_sold_category_level5, product_sold_condition, product_sold_custom_attribute0, product_sold_custom_attribute1, product_sold_custom_attribute2, product_sold_custom_attribute3, product_sold_custom_attribute4, product_sold_item_id, product_sold_title, product_sold_type_l1, product_sold_type_l2, product_sold_type_l3, product_sold_type_l4, product_sold_type_l5, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, week, year

**Metrics:** all_average_cart_size, all_average_order_value_micros, all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_value, all_conversions_value_by_conversion_date, all_cost_of_goods_sold_micros, all_cross_sell_cost_of_goods_sold_micros, all_cross_sell_gross_profit_micros, all_cross_sell_revenue_micros, all_cross_sell_units_sold, all_gross_profit_margin, all_gross_profit_micros, all_lead_cost_of_goods_sold_micros, all_lead_gross_profit_micros, all_lead_revenue_micros, all_lead_units_sold, all_orders, all_revenue_micros, all_units_sold, average_cart_size, average_cpc, average_order_value_micros, clicks, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_value, conversions_value_by_conversion_date, cost_micros, cost_of_goods_sold_micros, cost_per_all_conversions, cost_per_conversion, cross_device_conversions, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, ctr, gross_profit_margin, gross_profit_micros, impressions, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, orders, revenue_micros, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_click_share, search_impression_share, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, units_sold, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date

## segments.product_brand

Field descriptionBrand of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_brand.

## segments.product_category_level1

Field descriptionCategory (level 1) of the product.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.ad_sub_network_type, segments.product_category_level1.

## segments.product_category_level2

Field descriptionCategory (level 2) of the product.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.ad_sub_network_type, segments.product_category_level2.

## segments.product_category_level3

Field descriptionCategory (level 3) of the product.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.ad_sub_network_type, segments.product_category_level3.

## segments.product_category_level4

Field descriptionCategory (level 4) of the product.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.ad_sub_network_type, segments.product_category_level4.

## segments.product_category_level5

Field descriptionCategory (level 5) of the product.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.ad_sub_network_type, segments.product_category_level5.

## segments.product_channel

Field descriptionChannel of the product.
Category`SEGMENT` Data Type`ENUM`
`LOCAL``ONLINE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ProductChannelEnum.ProductChannel` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_channel.

## segments.product_channel_exclusivity

Field descriptionChannel exclusivity of the product.
Category`SEGMENT` Data Type`ENUM`
`MULTI_CHANNEL``SINGLE_CHANNEL``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ProductChannelExclusivityEnum.ProductChannelExclusivity` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_channel_exclusivity.

## segments.product_condition

Field descriptionCondition of the product.
Category`SEGMENT` Data Type`ENUM`
`NEW``REFURBISHED``UNKNOWN``UNSPECIFIED``USED` Type URL`google.ads.googleads.v26.enums.ProductConditionEnum.ProductCondition` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_condition.

## segments.product_country

Field descriptionResource name of the geo target constant for the country of sale of the
product.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_country.

## segments.product_custom_attribute0

Field descriptionCustom attribute 0 of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_custom_attribute0.

## segments.product_custom_attribute1

Field descriptionCustom attribute 1 of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_custom_attribute1.

## segments.product_custom_attribute2

Field descriptionCustom attribute 2 of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_custom_attribute2.

## segments.product_custom_attribute3

Field descriptionCustom attribute 3 of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_custom_attribute3.

## segments.product_custom_attribute4

Field descriptionCustom attribute 4 of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_custom_attribute4.

## segments.product_item_id

Field descriptionItem ID of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_item_id.

## segments.product_language

Field descriptionResource name of the language constant for the language of the product.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_language.

## segments.product_merchant_id

Field descriptionMerchant ID of the product.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_merchant_id.

## segments.product_store_id

Field descriptionStore ID of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_attribution_event_type, date, day_of_week, device, external_conversion_source, month, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, week, year

**Metrics:** all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_value, all_conversions_value_by_conversion_date, average_cpc, clicks, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_value, conversions_value_by_conversion_date, cost_micros, cost_per_all_conversions, cost_per_conversion, cross_device_conversions, ctr, impressions, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date

## segments.product_title

Field descriptionTitle of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_click_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, segments.product_title.

## segments.product_type_l1

Field descriptionType (level 1) of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_type_l1.

## segments.product_type_l2

Field descriptionType (level 2) of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_type_l2.

## segments.product_type_l3

Field descriptionType (level 3) of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_type_l3.

## segments.product_type_l4

Field descriptionType (level 4) of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_type_l4.

## segments.product_type_l5

Field descriptionType (level 5) of the product.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.product_aggregator_id. Plus: segments.product_aggregator_id. Except: segments.product_type_l5.

## segments.quarter

Field descriptionQuarter as represented by the date of the first day of a quarter.
Uses the calendar year for quarters, for example, the second quarter of
2018 starts on 2018-04-01. Formatted as yyyy-MM-dd.
Category`SEGMENT` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.day_of_week. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), metrics.biddable_app_install_conversions, metrics.biddable_app_post_install_conversions, metrics.biddable_cohort_app_post_install_conversions, metrics.clicks_unique_query_clusters, metrics.conversion_last_conversion_date, metrics.conversion_last_received_request_date_time, metrics.conversions_unique_query_clusters, metrics.historical_creative_quality_score, metrics.historical_landing_page_quality_score, metrics.historical_quality_score, metrics.historical_search_predicted_ctr, metrics.impressions_unique_query_clusters, metrics.youtube_comments, metrics.youtube_likes, metrics.youtube_shares, segments.day_of_week, segments.interaction_on_this_extension, segments.mobile_device_platform, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt). Except: metrics.svr, segments.adjusted_age_range, segments.adjusted_gender, segments.loyalty_membership, segments.quarter.

## segments.recommendation_type

Field descriptionRecommendation type.
Category`SEGMENT` Data Type`ENUM`
`CALLOUT_ASSET``CALL_ASSET``CAMPAIGN_BUDGET``CAMPAIGN_SPECIFIC_APP_GOAL``CUSTOM_AUDIENCE_OPT_IN``DISPLAY_EXPANSION_OPT_IN``DYNAMIC_IMAGE_EXTENSION_OPT_IN``ENHANCED_CPC_OPT_IN``FORECASTING_CAMPAIGN_BUDGET``FORECASTING_SET_TARGET_CPA``FORECASTING_SET_TARGET_ROAS``IMPROVE_DEMAND_GEN_AD_STRENGTH``IMPROVE_GOOGLE_TAG_COVERAGE``IMPROVE_PERFORMANCE_MAX_AD_STRENGTH``KEYWORD``KEYWORD_MATCH_TYPE``LEAD_FORM_ASSET``LOWER_TARGET_ROAS``LOWER_TARGET_ROAS_PERFORMANCE_BID_TOO_LOW``MARGINAL_ROI_CAMPAIGN_BUDGET``MAXIMIZE_CLICKS_OPT_IN``MAXIMIZE_CONVERSIONS_OPT_IN``MAXIMIZE_CONVERSION_VALUE_OPT_IN``MIGRATE_DYNAMIC_SEARCH_ADS_CAMPAIGN_TO_PERFORMANCE_MAX``MOVE_UNUSED_BUDGET``OPTIMIZE_AD_ROTATION``OPTIMIZE_FOR_NEW_CUSTOMERS``PERFORMANCE_MAX_FINAL_URL_OPT_IN``PERFORMANCE_MAX_OPT_IN``RAISE_BUDGET_PERFORMANCE_TOO_LOW``RAISE_TARGET_CPA``RAISE_TARGET_CPA_BID_TOO_LOW``RAISE_TARGET_CPA_PERFORMANCE_BID_TOO_LOW``REFRESH_CUSTOMER_MATCH_LIST``RESPONSIVE_SEARCH_AD``RESPONSIVE_SEARCH_AD_ASSET``RESPONSIVE_SEARCH_AD_IMPROVE_AD_STRENGTH``SEARCH_PARTNERS_OPT_IN``SET_TARGET_CPA``SET_TARGET_ROAS``SHOPPING_ADD_AGE_GROUP``SHOPPING_ADD_COLOR``SHOPPING_ADD_GENDER``SHOPPING_ADD_GTIN``SHOPPING_ADD_MORE_IDENTIFIERS``SHOPPING_ADD_PRODUCTS_TO_CAMPAIGN``SHOPPING_ADD_SIZE``SHOPPING_FIX_DISAPPROVED_PRODUCTS``SHOPPING_FIX_MERCHANT_CENTER_ACCOUNT_SUSPENSION_WARNING``SHOPPING_FIX_SUSPENDED_MERCHANT_CENTER_ACCOUNT``SHOPPING_MIGRATE_REGULAR_SHOPPING_CAMPAIGN_OFFERS_TO_PERFORMANCE_MAX``SHOPPING_TARGET_ALL_OFFERS``SITELINK_ASSET``TARGET_CPA_OPT_IN``TARGET_ROAS_OPT_IN``TEXT_AD``UNKNOWN``UNSPECIFIED``UPGRADE_LOCAL_CAMPAIGN_TO_PERFORMANCE_MAX``UPGRADE_SMART_SHOPPING_CAMPAIGN_TO_PERFORMANCE_MAX``USE_BROAD_MATCH_KEYWORD` Type URL`google.ads.googleads.v26.enums.RecommendationTypeEnum.RecommendationType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Metrics:** optimization_score_uplift, optimization_score_url

## segments.search_engine_results_page_type

Field descriptionType of the search engine results page.
Category`SEGMENT` Data Type`ENUM`
`ADS_AND_ORGANIC``ADS_ONLY``ORGANIC_ONLY``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt)

**Segments:** date, day_of_week, device, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, month, month_of_year, quarter, week, year

**Metrics:** average_cpc, clicks, combined_clicks, combined_clicks_per_query, combined_queries, ctr, impressions, organic_clicks, organic_clicks_per_query, organic_impressions, organic_impressions_per_query, organic_queries

## segments.sk_ad_network_ad_event_type

Field descriptioniOS Store Kit Ad Network ad event type.
Category`SEGMENT` Data Type`ENUM`
`INTERACTION``UNAVAILABLE``UNKNOWN``UNSPECIFIED``VIEW` Type URL`google.ads.googleads.v26.enums.SkAdNetworkAdEventTypeEnum.SkAdNetworkAdEventType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** date, day_of_week, month, month_of_year, quarter, sk_ad_network_attribution_credit, sk_ad_network_coarse_conversion_value, sk_ad_network_fine_conversion_value, sk_ad_network_postback_sequence_index, sk_ad_network_redistributed_fine_conversion_value, sk_ad_network_source_app.sk_ad_network_source_app_id, sk_ad_network_source_domain, sk_ad_network_source_type, sk_ad_network_user_type, sk_ad_network_version, week, year

**Metrics:** sk_ad_network_installs, sk_ad_network_total_conversions

## segments.sk_ad_network_attribution_credit

Field descriptioniOS Store Kit Ad Network attribution credit
Category`SEGMENT` Data Type`ENUM`
`CONTRIBUTED``UNAVAILABLE``UNKNOWN``UNSPECIFIED``WON` Type URL`google.ads.googleads.v26.enums.SkAdNetworkAttributionCreditEnum.SkAdNetworkAttributionCredit` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_attribution_credit.

## segments.sk_ad_network_coarse_conversion_value

Field descriptioniOS Store Kit Ad Network coarse conversion value.
Category`SEGMENT` Data Type`ENUM`
`HIGH``LOW``MEDIUM``NONE``UNAVAILABLE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.SkAdNetworkCoarseConversionValueEnum.SkAdNetworkCoarseConversionValue` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_coarse_conversion_value.

## segments.sk_ad_network_fine_conversion_value

Field descriptioniOS Store Kit Ad Network conversion value.
Null value means this segment is not applicable, for example, non-iOS
campaign.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_fine_conversion_value.

## segments.sk_ad_network_postback_sequence_index

Field descriptioniOS Store Kit Ad Network postback sequence index.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_postback_sequence_index.

## segments.sk_ad_network_redistributed_fine_conversion_value

Field descriptioniOS Store Kit Ad Network redistributed fine conversion value.

Google uses modeling on observed conversion values(obtained
from Apple) to calculate conversions from SKAN postbacks where
NULLs are returned. This column represents the sum of the modeled
conversion values and the observed conversion values. See
<https://support.google.com/google-ads/answer/14892597>
to lean more.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_redistributed_fine_conversion_value.

## segments.sk_ad_network_source_app.sk_ad_network_source_app_id

Field descriptionApp id where the ad that drove the iOS Store Kit Ad Network install was
shown.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_source_app.sk_ad_network_source_app_id.

## segments.sk_ad_network_source_domain

Field descriptionWebsite where the ad that drove the iOS Store Kit Ad Network install was
shown. Null value means this segment is not applicable, for example,
non-iOS campaign, or was not present in any postbacks sent by Apple.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_source_domain.

## segments.sk_ad_network_source_type

Field descriptionThe source type where the ad that drove the iOS Store Kit Ad Network
install was shown. Null value means this segment is not applicable, for
example, non-iOS campaign, or neither source domain nor source app were
present in any postbacks sent by Apple.
Category`SEGMENT` Data Type`ENUM`
`MOBILE_APPLICATION``UNAVAILABLE``UNKNOWN``UNSPECIFIED``WEBSITE` Type URL`google.ads.googleads.v26.enums.SkAdNetworkSourceTypeEnum.SkAdNetworkSourceType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_source_type.

## segments.sk_ad_network_user_type

Field descriptioniOS Store Kit Ad Network user type.
Category`SEGMENT` Data Type`ENUM`
`NEW_INSTALLER``REINSTALLER``UNAVAILABLE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.SkAdNetworkUserTypeEnum.SkAdNetworkUserType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_user_type.

## segments.sk_ad_network_version

Field descriptionThe version of the SKAdNetwork API used.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: segments.sk_ad_network_version.

## segments.slot

Field descriptionPosition of the ad.
Category`SEGMENT` Data Type`ENUM`
`CONTENT``MIXED``SEARCH_OTHER``SEARCH_PARTNER_OTHER``SEARCH_PARTNER_TOP``SEARCH_SIDE``SEARCH_TOP``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.SlotEnum.Slot` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_combination_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_combination_view.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** ad_destination_type, ad_network_type, ad_sub_network_type, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, device, external_conversion_source, interaction_on_this_extension, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, match_type, month, month_of_year, new_versus_returning_customers, quarter, week, year

**Metrics:** all_conversions, all_value_adjustment, average_cart_size, average_cost, average_cpc, average_cpe, average_cpm, average_order_value_micros, clicks, conversions, conversions_from_interactions_rate, conversions_value, cost_converted_currency_per_platform_comparable_conversion, cost_micros, cost_of_goods_sold_micros, cost_per_conversion, cost_per_platform_comparable_conversion, cross_sell_cost_of_goods_sold_micros, cross_sell_gross_profit_micros, cross_sell_revenue_micros, cross_sell_units_sold, ctr, engagement_rate, engagements, gmail_forwards, gmail_saves, gmail_secondary_clicks, gross_profit_margin, gross_profit_micros, impressions, interaction_event_types, interaction_rate, interactions, lead_cost_of_goods_sold_micros, lead_gross_profit_micros, lead_revenue_micros, lead_units_sold, mobile_friendly_clicks_percentage, new_customer_lifetime_value, orders, original_conversion_value, platform_comparable_conversions, platform_comparable_conversions_by_conversion_date, platform_comparable_conversions_from_interactions_rate, platform_comparable_conversions_from_interactions_value_per_interaction, platform_comparable_conversions_value, platform_comparable_conversions_value_by_conversion_date, platform_comparable_conversions_value_per_cost, revenue_micros, speed_score, units_sold, valid_accelerated_mobile_pages_clicks_percentage, value_adjustment, value_per_conversion, value_per_platform_comparable_conversion, value_per_platform_comparable_conversions_by_conversion_date, view_through_conversions

## segments.start_date

Field descriptionStart date of the booking. Formatted as yyyy-MM-dd.
Category`SEGMENT` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: segments.advance_booking_window. Except: segments.start_date.

## segments.start_day_of_week

Field descriptionStart day of week of the booking.
Category`SEGMENT` Data Type`ENUM`
`FRIDAY``MONDAY``SATURDAY``SUNDAY``THURSDAY``TUESDAY``UNKNOWN``UNSPECIFIED``WEDNESDAY` Type URL`google.ads.googleads.v26.enums.DayOfWeekEnum.DayOfWeek` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: segments.advance_booking_window. Except: segments.start_day_of_week.

## segments.user_set_dates

Field descriptionIndicates whether user-specified dates were selected.
Category`SEGMENT` Data Type`ENUM`
`DEFAULT_SELECTION``UNKNOWN``UNSPECIFIED``USER_SELECTED` Type URL`google.ads.googleads.v26.enums.DateSelectionTypeEnum.DateSelectionType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: segments.advance_booking_window. Except: segments.user_set_dates.

## segments.vertical_ads_event_participant_display_names

Field descriptionThe display names of participants in an event listing, like performers,
speakers, or teams.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, segments.ad_format_type, segments.vertical_ads_listing_venue. Except: segments.length_of_booking, segments.start_date, segments.start_day_of_week, segments.user_set_dates, segments.vertical_ads_hotel_class.

## segments.vertical_ads_hotel_class

Field descriptionThe class of the hotel. Generally in the range of 1 to 5 stars, but fully
customizable in the hotel feed.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.advance_booking_window, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.vertical_ads_hotel_class.

## segments.vertical_ads_listing

Field descriptionThe listing associated with a listing impression, click or conversion.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.advance_booking_window, segments.vertical_ads_event_participant_display_names, segments.vertical_ads_listing_user_rating, segments.vertical_ads_listing_venue, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.vertical_ads_listing.

## segments.vertical_ads_listing_brand

Field descriptionThe brand associated with a specific listing within a Vertical Ads
context, for example, the brand of a car rental, a vacation home, or an
event.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.advance_booking_window, segments.vertical_ads_event_participant_display_names, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.vertical_ads_listing_brand.

## segments.vertical_ads_listing_city

Field descriptionThe city where the vertical ads listing is located.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.advance_booking_window, segments.vertical_ads_event_participant_display_names, segments.vertical_ads_listing_user_rating, segments.vertical_ads_listing_venue, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.vertical_ads_listing_city.

## segments.vertical_ads_listing_country

Field descriptionThe country where the vertical ads listing is located.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.advance_booking_window, segments.vertical_ads_event_participant_display_names, segments.vertical_ads_listing_user_rating, segments.vertical_ads_listing_venue, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.vertical_ads_listing_country.

## segments.vertical_ads_listing_region

Field descriptionThe region where the vertical ads listing is located.
Category`SEGMENT` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.advance_booking_window, segments.vertical_ads_event_participant_display_names, segments.vertical_ads_listing_user_rating, segments.vertical_ads_listing_venue, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.vertical_ads_listing_region.

## segments.vertical_ads_listing_user_rating

Field descriptionInteger value specifying the user rating of the vertical ads listing
as a number from 1 to 5, where 5 is the best. The value will always be
within this range.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, segments.ad_format_type. Except: segments.length_of_booking, segments.start_date, segments.start_day_of_week, segments.user_set_dates, segments.vertical_ads_hotel_class, segments.vertical_ads_listing_brand.

## segments.vertical_ads_listing_venue

Field descriptionThe name of the venue for the vertical ads listing, for example, the
venue for a concert event.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, segments.ad_format_type, segments.vertical_ads_event_participant_display_names. Except: segments.length_of_booking, segments.start_date, segments.start_day_of_week, segments.user_set_dates, segments.vertical_ads_hotel_class, segments.vertical_ads_listing_brand.

## segments.vertical_ads_partner_account

Field descriptionA specific partner account within a Partner Center (for example, Hotel
Center) that supplies inventory feed data for Vertical Ads.
Category`SEGMENT` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.advance_booking_window, segments.vertical_ads_event_participant_display_names, segments.vertical_ads_listing_user_rating, segments.vertical_ads_listing_venue, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.vertical_ads_partner_account.

## segments.vertical_ads_price_tier

Field descriptionRelative price competitiveness bucket hotel listing (only relevant
to hotel campaigns).
Category`SEGMENT` Data Type`ENUM`
`LOWEST_TIED``LOWEST_UNIQUE``NOT_LOWEST``ONLY_PARTNER_SHOWN``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.HotelPriceBucketEnum.HotelPriceBucket` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.length_of_booking, segments.start_date, segments.start_day_of_week, segments.user_set_dates.

## segments.vertical_ads_rate_rule_id

Field descriptionString identifier corresponding to private or conditional rate rules
applied to the bid/impression.
Category`SEGMENT` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.vertical_ads_price_tier, segments.vertical_ads_rate_type. Except: segments.length_of_booking, segments.start_date, segments.start_day_of_week, segments.user_set_dates.

## segments.vertical_ads_rate_type

Field descriptionCategorization of the public, private, or conditional rate type.
Category`SEGMENT` Data Type`ENUM`
`PRIVATE_RATE``PUBLIC_RATE``QUALIFIED_RATE``UNAVAILABLE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.HotelRateTypeEnum.HotelRateType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id. Except: segments.length_of_booking, segments.start_date, segments.start_day_of_week, segments.user_set_dates.

## segments.vertical_ads_vertical

Field descriptionType of vertical ad, such as Vacation Rentals, Car Rentals, or
Events, used to categorize and segment data in the context of Vertical
Ads.
Category`SEGMENT` Data Type`ENUM`
`EVENTS``FLIGHTS``HOTELS``RENTAL_CARS``THINGS_TO_DO``UNKNOWN``UNSPECIFIED``VACATION_RENTALS` Type URL`google.ads.googleads.v26.enums.VerticalAdsItemVerticalTypeEnum.VerticalAdsItemVerticalType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.advance_booking_window. Plus: metrics.average_cpc, metrics.search_absolute_top_impression_share, metrics.search_budget_lost_absolute_top_impression_share, metrics.search_budget_lost_impression_share, metrics.search_impression_share, metrics.search_rank_lost_absolute_top_impression_share, metrics.search_rank_lost_impression_share, metrics.vertical_ads_average_booking_value_micros, metrics.vertical_ads_potential_impressions, metrics.vertical_ads_price_difference_percentage, segments.ad_format_type, segments.advance_booking_window, segments.vertical_ads_event_participant_display_names, segments.vertical_ads_listing_user_rating, segments.vertical_ads_listing_venue, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.vertical_ads_vertical.

## segments.week

Field descriptionWeek as defined as Monday through Sunday, and represented by the date of
Monday. Formatted as yyyy-MM-dd.
Category`SEGMENT` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.day_of_week. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), metrics.biddable_app_install_conversions, metrics.biddable_app_post_install_conversions, metrics.biddable_cohort_app_post_install_conversions, metrics.clicks_unique_query_clusters, metrics.conversion_last_conversion_date, metrics.conversion_last_received_request_date_time, metrics.conversions_unique_query_clusters, metrics.coviewed_impressions, metrics.historical_creative_quality_score, metrics.historical_landing_page_quality_score, metrics.historical_quality_score, metrics.historical_search_predicted_ctr, metrics.impressions_unique_query_clusters, metrics.primary_impressions, metrics.youtube_comments, metrics.youtube_likes, metrics.youtube_shares, segments.day_of_week, segments.interaction_on_this_extension, segments.mobile_device_platform, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt). Except: segments.loyalty_membership, segments.week.

## segments.year

Field descriptionYear, formatted as yyyy.
Category`SEGMENT` Data Type`INT32` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.day_of_week. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), metrics.biddable_app_install_conversions, metrics.biddable_app_post_install_conversions, metrics.biddable_cohort_app_post_install_conversions, metrics.clicks_unique_query_clusters, metrics.conversion_last_conversion_date, metrics.conversion_last_received_request_date_time, metrics.conversions_unique_query_clusters, metrics.historical_creative_quality_score, metrics.historical_landing_page_quality_score, metrics.historical_quality_score, metrics.historical_search_predicted_ctr, metrics.impressions_unique_query_clusters, metrics.youtube_comments, metrics.youtube_likes, metrics.youtube_shares, segments.day_of_week, segments.interaction_on_this_extension, segments.mobile_device_platform, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt). Except: metrics.all_conversions_from_click_to_call, metrics.all_conversions_from_directions, metrics.all_conversions_from_menu, metrics.all_conversions_from_order, metrics.all_conversions_from_other_engagement, metrics.all_conversions_from_store_visit, metrics.all_conversions_from_store_website, metrics.svr, segments.adjusted_age_range, segments.adjusted_gender, segments.year.

## metrics.absolute_top_impression_percentage

Field descriptionSearch absolute top impression share is the percentage of your Search ad
impressions that are shown in the absolute top Search position.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, advance_booking_window, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, date, day_of_week, device, geo_target_city, geo_target_country, geo_target_metro, geo_target_region, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, length_of_booking, match_type, month, quarter, search_term_match_source, search_term_match_type, search_term_targeting_status, start_date, start_day_of_week, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

## metrics.active_view_audibility_invalid_givt_measurable_impressions_rate

Field descriptionThe number of impressions for which Active View could measure audibility,
but that were filtered out by traffic quality filters, divided by the total
number of impressions measurable for audibility. Only includes GIVT
(general invalid traffic) impressions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt)

**Segments:** ad_format_type, ad_network_type, ad_sub_format_type, ad_sub_network_type, date, day_of_week, device, hour, month, quarter, week, year

## metrics.active_view_audibility_invalid_measurable_impressions_rate

Field descriptionThe number of impressions for which Active View could measure audibility,
but that were filtered out by traffic quality filters, divided by the
total number of impressions measurable for audibility.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audibility_measurable_impressions

Field descriptionThe number of impressions for which Active View could measure if the ad was
audible.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audibility_measurable_impressions_rate

Field descriptionThe number of impressions for which Active View could measure if the ad was
audible, divided by the total number of impressions with Active View audio
enabled.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_impressions

Field descriptionThe number of impressions that were audible (volume \> 0%) at any point
during the ad playback.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_impressions_rate

Field descriptionThe number of impressions that were audible (volume \> 0%) at any point
during the ad playback, divided by the total number of impressions
measurable for audibility.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_quartile_p100_rate

Field descriptionThe number of impressions that were audible at the fourth quartile of the
ad playback, divided by the total number of impressions measurable for
audibility.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_quartile_p25_rate

Field descriptionThe number of impressions that were audible at the first quartile of the
ad playback, divided by the total number of impressions measurable for
audibility.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_quartile_p50_rate

Field descriptionThe number of impressions that were audible at the second quartile of the
ad playback, divided by the total number of impressions measurable for
audibility.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_quartile_p75_rate

Field descriptionThe number of impressions that were audible at the third quartile of the
ad playback, divided by the total number of impressions measurable for
audibility.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_thirty_seconds_impressions

Field descriptionThe number of impressions that were audible for at least 30 seconds
(cumulative).
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_thirty_seconds_impressions_rate

Field descriptionThe number of impressions that were audible for at least 30 seconds
(cumulative), divided by the total number of impressions measurable for
audibility.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_two_seconds_impressions

Field descriptionThe number of impressions that were audible for at least 2 seconds
(cumulative).
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_audible_two_seconds_impressions_rate

Field descriptionThe number of impressions that were audible for at least 2 seconds
(cumulative), divided by the total number of impressions measurable for
audibility.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate.

## metrics.active_view_cpm

Field descriptionAverage cost of viewable impressions (`active_view_impressions`).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, click_type, date, day_of_week, device, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, month, quarter, week, year

## metrics.active_view_ctr

Field descriptionActive view measurable clicks divided by active view viewable impressions.

This metric is reported only for the Display Network.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm.

## metrics.active_view_impressions

Field descriptionA measurement of the number of times your ad has become viewable on a
Display Network site.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm.

## metrics.active_view_measurability

Field descriptionThe ratio of impressions that were eligible to be measured by Active View
over the number of served impressions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm.

## metrics.active_view_measurable_cost_micros

Field descriptionThe cost of the impressions you received that were measurable by Active
View.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm.

## metrics.active_view_measurable_impressions

Field descriptionThe number of times your ads are appearing on placements in positions
where they can be seen.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm.

## metrics.active_view_viewability

Field descriptionThe percentage of times when your ad appeared on an Active View enabled
site (measurable impressions) and was viewable (viewable impressions).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm.

## metrics.all_average_cart_size

Field descriptionAll average cart size is the average number of products in each order
attributed to your ads. Includes the amount from the average_cart_size
metric, plus avg. cart size from all your conversion actions, even if your
campaigns are not actively optimizing towards them. It's calculated using
product info from cart data to give more detail than conversion value
alone.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt)

**Segments:** ad_network_type, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_attribution_event_type, date, day_of_week, device, external_conversion_source, month, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, week, year

## metrics.all_average_order_value_micros

Field descriptionAll average order value is the average revenue you made per order
attributed to your ads. Includes the amount from the average_order_value
metric, plus avg. order value from all your conversion actions, even
if your campaigns are not actively optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size.

## metrics.all_conversions

Field descriptionThe total number of conversions. This includes all conversions regardless
of the value of include_in_conversions_metric.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_budget](https://developers.google.com/google-ads/api/fields/v26/campaign_budget.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [dynamic_search_ads_search_term_view](https://developers.google.com/google-ads/api/fields/v26/dynamic_search_ads_search_term_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_destination_type, ad_format_type, ad_network_type, ad_sub_format_type, ad_sub_network_type, advance_booking_window, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, budget_campaign_association_status.campaign, budget_campaign_association_status.status, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, device, external_activity_id, external_conversion_source, geo_target_airport, geo_target_canton, geo_target_city, geo_target_country, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, loyalty_membership, match_type, mobile_device_platform, month, new_versus_returning_customers, partner_hotel_id, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, search_term_match_source, search_term_match_type, slot, start_date, start_day_of_week, travel_destination_city, travel_destination_country, travel_destination_region, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, webpage, week, year

## metrics.all_conversions_by_conversion_date

Field descriptionThe total number of conversions. This includes all conversions regardless
of the value of include_in_conversions_metric. When this column is selected
with date, the values in date column means the conversion date. Details for
the `by_conversion_date` columns are available at [Understand conversions
by time with new
columns](https://support.google.com/google-ads/answer/9549009).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), segments.ad_sub_network_type, segments.conversion_adjustment, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.geo_target_airport, segments.geo_target_canton, segments.geo_target_city, segments.geo_target_country, segments.geo_target_county, segments.geo_target_district, segments.geo_target_metro, segments.geo_target_most_specific_location, segments.geo_target_postal_code, segments.geo_target_province, segments.geo_target_region, segments.geo_target_state, segments.hour, segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, segments.match_type, segments.new_versus_returning_customers, segments.product_store_id, [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt). Except: [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt).

## metrics.all_conversions_from_click_to_call

Field descriptionThe number of times people clicked the "Call" button to call a business
during or after clicking an ad. This number doesn't include whether or not
calls were connected, or the duration of any calls.

This metric applies to feed items only.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** date, day_of_week, month, quarter, week

## metrics.all_conversions_from_directions

Field descriptionThe number of times people clicked a "Get directions" button to navigate to
a business after clicking an ad.

This metric applies to feed items only.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call.

## metrics.all_conversions_from_interactions_rate

Field descriptionAll conversions from interactions (as oppose to view through conversions)
divided by the number of ad interactions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Except: [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.mobile_device_platform, segments.new_versus_returning_customers, segments.slot.

## metrics.all_conversions_from_interactions_value_per_interaction

Field descriptionThe value of all conversions from interactions divided by the total number
of interactions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_destination_type, ad_network_type, ad_sub_network_type, advance_booking_window, click_type, date, day_of_week, device, external_activity_id, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, loyalty_membership, match_type, month, partner_hotel_id, quarter, search_term_match_source, search_term_match_type, start_date, start_day_of_week, travel_destination_city, travel_destination_country, travel_destination_region, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

## metrics.all_conversions_from_location_asset_click_to_call

Field descriptionNumber of call button clicks on any location surface after a chargeable ad
event (click or impression). This measure is coming from Asset based
location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [per_store_view](https://developers.google.com/google-ads/api/fields/v26/per_store_view.md.txt)

**Segments:** date

## metrics.all_conversions_from_location_asset_directions

Field descriptionNumber of driving directions clicks on any location surface after a
chargeable ad event (click or impression). This measure is coming
from Asset based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.all_conversions_from_location_asset_menu

Field descriptionNumber of menu link clicks on any location surface after a chargeable ad
event (click or impression). This measure is coming from Asset based
location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.all_conversions_from_location_asset_order

Field descriptionNumber of order clicks on any location surface after a chargeable ad event
(click or impression). This measure is coming from Asset based
location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.all_conversions_from_location_asset_other_engagement

Field descriptionNumber of other types of local action clicks on any location surface after
a chargeable ad event (click or impression). This measure is coming
from Asset based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.all_conversions_from_location_asset_store_visits

Field descriptionEstimated number of visits to the business after a chargeable
ad event (click or impression). This measure is coming from Asset
based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.all_conversions_from_location_asset_website

Field descriptionNumber of website URL clicks on any location surface after a chargeable ad
event (click or impression). This measure is coming from Asset based
location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.all_conversions_from_menu

Field descriptionThe number of times people clicked a link to view a business's menu after
clicking an ad.

This metric applies to feed items only.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call.

## metrics.all_conversions_from_order

Field descriptionThe number of times people placed an order at a business after clicking an
ad.

This metric applies to feed items only.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call.

## metrics.all_conversions_from_other_engagement

Field descriptionThe number of other conversions (for example, posting a review or saving a
location for a business) that occurred after people clicked an ad.

This metric applies to feed items only.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call.

## metrics.all_conversions_from_store_visit

Field descriptionEstimated number of times people visited a business after clicking an ad.

This metric applies to feed items only.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call.

## metrics.all_conversions_from_store_website

Field descriptionThe number of times people were taken to a business's URL after
clicking an ad.

This metric applies to feed items only.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call.

## metrics.all_conversions_value

Field descriptionThe value of all conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: segments.conversion_value_rule_primary_dimension. Except: segments.slot.

## metrics.all_conversions_value_by_conversion_date

Field descriptionThe value of all conversions. When this column is selected with date, the
values in date column means the conversion date. Details for the
`by_conversion_date` columns are available at [Understand conversions by
time with new
columns](https://support.google.com/google-ads/answer/9549009).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), segments.ad_sub_network_type, segments.conversion_adjustment, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.conversion_value_rule_primary_dimension, segments.geo_target_airport, segments.geo_target_canton, segments.geo_target_city, segments.geo_target_country, segments.geo_target_county, segments.geo_target_district, segments.geo_target_metro, segments.geo_target_most_specific_location, segments.geo_target_postal_code, segments.geo_target_province, segments.geo_target_region, segments.geo_target_state, segments.hour, segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, segments.match_type, segments.new_versus_returning_customers, segments.product_store_id, [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt). Except: [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt).

## metrics.all_conversions_value_per_cost

Field descriptionThe value of all conversions divided by the total cost of ad interactions
(such as clicks for text ads or views for video ads).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_interactions_value_per_interaction. Plus: [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt).

## metrics.all_cost_of_goods_sold_micros

Field descriptionAll cost of goods sold is the total cost of the products you sold in orders
attributed to your ads. Includes the amount from the
cost_of_goods_sold_micros metric, plus cost of goods sold from all
conversion actions, even if your campaigns are not actively optimizing
towards them. It's calculated using product info from cart data to give
more detail than conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_cross_sell_cost_of_goods_sold_micros

Field descriptionAll cross-sell cost of goods sold is the total cost of products sold as a
result of advertising a different product. Includes the amount from the
cross_sell_cost_of_goods_sold_micros metric, plus cross-sell cost of goods
sold from all your conversion actions, even if your campaigns are not
actively optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_cross_sell_gross_profit_micros

Field descriptionAll cross-sell gross profit is the profit you made from products sold as a
result of advertising a different product, minus cost of goods sold (COGS).
Includes the amount from the cross_sell_gross_profit_micros metric, plus
cross-sell gross profit from all your conversion actions, even if your
campaigns are not actively optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_cross_sell_revenue_micros

Field descriptionAll cross-sell revenue is the total amount you made from products sold as
a result of advertising a different product. Includes the amount from the
cross_sell_revenue_micros metric, plus cross-sell revenue from all your
conversion actions, even if your campaigns are not actively optimizing
towards them. It's calculated using product info from cart data to give
more detail than conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_cross_sell_units_sold

Field descriptionAll cross-sell units sold is the total number of products sold as a result
of advertising a different product. Includes the amount shown in the
cross_sell_units_sold metric, plus cross-sell units sold from all your
conversion actions, even if your campaigns are not actively optimizing
towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_gross_profit_margin

Field descriptionAll gross profit margin is the percentage gross profit you made from
orders attributed to your ads, after taking out the cost of goods sold
(COGS). This value is between 0.0 and 1.0, where 1.0 means 100%. Includes
the amount from the gross_profit_margin metric, plus gross profit margin
across all conversion actions, even if your campaigns are not actively
optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_gross_profit_micros

Field descriptionAll gross profit is the total profit made from orders attributed to your
ads minus the cost of goods sold (COGS). Includes the amount from the
gross_profit_micros metric, plus gross profit from all your conversion
actions, even if your campaigns are not actively optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_lead_cost_of_goods_sold_micros

Field descriptionAll lead cost of goods sold is the total cost of products sold as a result
of advertising the same product. Includes the amount shown in the
lead_cost_of_goods_sold_micros metric, plus lead cost of goods sold from
all your conversion actions, even if your campaigns are not actively
optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_lead_gross_profit_micros

Field descriptionAll lead gross profit is the profit you made from products sold as a result
of advertising the same product, minus cost of goods sold (COGS). Includes
the amount from the lead_gross_profit_micros metric, plus lead gross profit
from all your conversion actions, even if your campaigns are not actively
optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_lead_revenue_micros

Field descriptionAll lead revenue is the total amount you made from products sold as a
result of advertising the same product. Includes the amount shown in the
lead_revenue_micros metric, plus lead revenue from all your conversion
actions, even if your campaigns are not actively optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_lead_units_sold

Field descriptionAll lead units sold is the total number of products sold as a result of
advertising the same product. Includes the amount shown in the
lead_units_sold metric, plus lead units sold from all your conversion
actions, even if your campaigns are not actively optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_new_customer_lifetime_value

Field descriptionAll of new customers' lifetime conversion value. If you have set up
customer acquisition goal at either account level or campaign level, this
will include the additional conversion value from new customers for both
biddable and non-biddable conversions. If your campaign has adopted the
customer acquisition goal and selected "bid higher for new customers",
these values will be included in `all_conversions_value`. See
[About customer lifecycle
goals](https://support.google.com/google-ads/answer/12080169) for more
details.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, external_conversion_source, hour, month, new_versus_returning_customers, quarter, week, year

## metrics.all_orders

Field descriptionAll orders is total number of purchase conversions attributed to your ads.
Includes the amount from the orders metric, plus orders from all your
conversion actions, even if your campaigns are not actively optimizing
towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size.

## metrics.all_revenue_micros

Field descriptionAll revenue is the total you made from orders attributed to your ads.
Includes the amount from the revenue_micros metric, plus revenue from all
your conversion actions, even if your campaigns are not actively optimizing
towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.all_units_sold

Field descriptionAll units sold is the total number of products sold from orders attributed
to your ads. Includes the amount from the units_sold metric, plus
units sold from all your conversion actions, even if your campaigns are not
actively optimizing towards them.
It's calculated using product info from cart data to give more detail than
conversion value alone.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5.

## metrics.auction_insight_search_absolute_top_impression_percentage

Field descriptionThis metric is part of the Auction Insights report, and tells the
percentage of times the ads of another participant showed in the absolute
top position (Position 1) on the search results page. This percentage is
computed only over the auctions that you appeared in the page.

This metric is not publicly available.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), segments.auction_insight_domain, segments.device, segments.year.

## metrics.auction_insight_search_impression_share

Field descriptionThis metric is part of the Auction Insights report, and tells the
percentage of impressions that another participant obtained, over the total
number of impressions that your ads were eligible for.
Any value below 0.1 is reported as 0.0999.

This metric is not publicly available.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), segments.auction_insight_domain, segments.device, segments.year.

## metrics.auction_insight_search_outranking_share

Field descriptionThis metric is part of the Auction Insights report, and tells the
percentage of impressions that your ads outranked (showed above)
another participant in the auction, compared to the total number of
impressions that your ads were eligible for.
Any value below 0.1 is reported as 0.0999.

This metric is not publicly available.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), segments.auction_insight_domain, segments.device, segments.year.

## metrics.auction_insight_search_overlap_rate

Field descriptionThis metric is part of the Auction Insights report, and tells the
percentage of times another participant's ad received an impression when
your ad also received an impression.

This metric is not publicly available.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), segments.auction_insight_domain, segments.device, segments.year.

## metrics.auction_insight_search_position_above_rate

Field descriptionThis metric is part of the Auction Insights report, and tells the
percentage of times another participant's ad was shown in a higher position
than yours, when both of your ads were shown at the same page.

This metric is not publicly available.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), segments.auction_insight_domain, segments.device, segments.year.

## metrics.auction_insight_search_top_impression_percentage

Field descriptionThis metric is part of the Auction Insights report, and tells the
percentage of times the ads of another participant showed adjacent to the
top organic search results. This percentage is computed only over the
auctions that you appeared in the page.

This metric is not publicly available.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), segments.auction_insight_domain, segments.device, segments.year.

## metrics.average_cart_size

Field descriptionAverage cart size is the average number of products in each order
attributed to your ads.

How it works: You report conversions with cart data for completed purchases
on your website. Average cart size is the total number of products sold
divided by the total number of orders you received.

Example: You received 2 orders, the first included 3 products and the
second included 2. The average cart size is 2.5 products = (3+2)/2.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: segments.ad_sub_network_type, segments.month_of_year, segments.slot.

## metrics.average_cost

Field descriptionThe average amount you pay per interaction. This amount is the total cost
of your ads divided by the total number of interactions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_budget](https://developers.google.com/google-ads/api/fields/v26/campaign_budget.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, budget_campaign_association_status.campaign, budget_campaign_association_status.status, click_type, date, day_of_week, device, geo_target_airport, geo_target_canton, geo_target_city, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, match_type, month, month_of_year, quarter, search_term_match_source, search_term_match_type, search_term_targeting_status, slot, week, year

## metrics.average_cpc

Field descriptionThe total cost of all clicks divided by the total number of clicks
received.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), segments.interaction_on_this_extension, segments.month_of_year, segments.search_engine_results_page_type, segments.search_term_targeting_status. Except: [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.advance_booking_window, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.length_of_booking, segments.mobile_device_platform, segments.new_versus_returning_customers, segments.start_date, segments.start_day_of_week, segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region, segments.user_set_dates, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type.

## metrics.average_cpe

Field descriptionThe average amount that you've been charged for an ad engagement. This
amount is the total cost of all ad engagements divided by the total number
of ad engagements.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm. Plus: [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_budget](https://developers.google.com/google-ads/api/fields/v26/campaign_budget.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), segments.ad_format_type, segments.ad_sub_format_type, segments.budget_campaign_association_status.campaign, segments.budget_campaign_association_status.status, segments.match_type, segments.month_of_year, segments.search_term_match_source, segments.search_term_match_type, segments.search_term_targeting_status, segments.slot, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.click_type.

## metrics.average_cpm

Field descriptionAverage cost-per-thousand impressions (CPM).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_budget](https://developers.google.com/google-ads/api/fields/v26/campaign_budget.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [dynamic_search_ads_search_term_view](https://developers.google.com/google-ads/api/fields/v26/dynamic_search_ads_search_term_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_format_type, ad_network_type, ad_sub_format_type, ad_sub_network_type, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, budget_campaign_association_status.campaign, budget_campaign_association_status.status, click_type, date, day_of_week, device, external_activity_id, geo_target_airport, geo_target_canton, geo_target_city, geo_target_country, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, interaction_on_this_extension, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, loyalty_membership, match_type, month, month_of_year, partner_hotel_id, quarter, search_term_match_source, search_term_match_type, search_term_targeting_status, slot, webpage, week, year

## metrics.average_order_value_micros

Field descriptionAverage order value is the average revenue you made per order attributed to
your ads.

How it works: You report conversions with cart data for completed purchases
on your website. Average order value is the total revenue from your orders
divided by the total number of orders.

Example: You received 3 orders which made $10, $15 and $20 worth of
revenue. The average order value is $15 = ($10 + $15 + $20)/3.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: segments.ad_sub_network_type, segments.month_of_year, segments.slot.

## metrics.average_page_views

Field descriptionAverage number of pages viewed per session.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, date, day_of_week, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, month, month_of_year, quarter, week, year

## metrics.average_time_on_site

Field descriptionTotal duration of all sessions (in seconds) / number of sessions. Imported
from Google Analytics.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views.

## metrics.average_video_watch_time_duration_millis

Field descriptionAverage video watch time duration in milliseconds for video impressions
that started playing.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.ad_network_type, segments.ad_sub_network_type, segments.hour.

## metrics.benchmark_average_max_cpc

Field descriptionAn indication of how other advertisers are bidding on similar products.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), segments.ad_network_type, segments.ad_sub_network_type, segments.year.

## metrics.biddable_app_install_conversions

Field descriptionNumber of app installs.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, conversion_action, conversion_action_category, conversion_action_name, date, month, month_of_year, quarter, week, year

## metrics.biddable_app_post_install_conversions

Field descriptionNumber of in-app actions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.biddable_app_install_conversions.

## metrics.biddable_cohort_app_post_install_conversions

Field descriptionParticipated in-app actions. The number of in app actions that come
directly or indirectly from the campaign.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.biddable_app_install_conversions. Except: [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name.

## metrics.biddable_indirect_install_first_in_app_conversion_micros

Field descriptionThe number of biddable first in app conversions where the app install was
driven by interaction with a web campaign.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

## metrics.bounce_rate

Field descriptionPercentage of clicks where the user only visited a single page on your
site. Imported from Google Analytics.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views.

## metrics.clicks

Field descriptionThe number of clicks.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), segments.ad_group, segments.ad_using_product_data, segments.ad_using_video, segments.asset_group, segments.campaign, segments.interaction_on_this_extension, segments.month_of_year, segments.search_engine_results_page_type, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status, [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt). Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.new_versus_returning_customers.

## metrics.clicks_unique_query_clusters

Field descriptionUnique query intent cluster count for clicks.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), segments.year. Except: segments.day_of_week.

## metrics.content_budget_lost_impression_share

Field descriptionThe estimated percentage of times that your ad was eligible to show
on the Display Network but didn't because your budget was too low.
Note: Content budget lost impression share is reported in the range of 0
to 0.9. Any value above 0.9 is reported as 0.9001.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), segments.ad_network_type, segments.ad_sub_network_type, segments.device, segments.month_of_year, segments.year.

## metrics.content_impression_share

Field descriptionThe impressions you've received on the Display Network divided
by the estimated number of impressions you were eligible to receive.

Note: Content impression share is reported in the range of 0.1 to 1. Any
value below 0.1 is reported as 0.0999.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.month_of_year. Except: [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), segments.ad_format_type, segments.ad_sub_format_type, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt).

## metrics.content_rank_lost_impression_share

Field descriptionThe estimated percentage of impressions on the Display Network
that your ads didn't receive due to poor Ad Rank.

Note: Content rank lost impression share is reported in the range of 0
to 0.9. Any value above 0.9 is reported as 0.9001.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), segments.ad_network_type, segments.ad_sub_network_type, segments.device, segments.month_of_year, segments.year.

## metrics.conversion_last_conversion_date

Field descriptionThe date of the most recent conversion for this conversion action. The date
is in the customer's time zone.
Category`METRIC` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** month, quarter, week, year

## metrics.conversion_last_received_request_date_time

Field descriptionThe last date/time a conversion tag for this conversion action successfully
fired and was seen by Google Ads. This firing event may not have been the
result of an attributable conversion (for example, because the tag was
fired from a browser that did not previously click an ad from an
appropriate advertiser). The date/time is in the customer's time zone.
Category`METRIC` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.conversion_last_conversion_date.

## metrics.conversions

Field descriptionThe number of conversions. This only includes conversion actions which
`include_in_conversions_metric` attribute is set to `true`. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), segments.ad_group, segments.ad_using_product_data, segments.ad_using_video, segments.asset_group, segments.campaign, segments.interaction_on_this_extension, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt).

## metrics.conversions_by_conversion_date

Field descriptionThe number of conversions. This only includes conversion actions which
include_in_conversions_metric attribute is set to true. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions. When this column is selected with date, the values in date
column means the conversion date. Details for the `by_conversion_date`
columns are available at [Understand conversions by time with new
columns](https://support.google.com/google-ads/answer/9549009).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), segments.ad_sub_network_type, segments.conversion_adjustment, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.geo_target_airport, segments.geo_target_canton, segments.geo_target_city, segments.geo_target_country, segments.geo_target_county, segments.geo_target_district, segments.geo_target_metro, segments.geo_target_most_specific_location, segments.geo_target_postal_code, segments.geo_target_province, segments.geo_target_region, segments.geo_target_state, segments.hour, segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, segments.match_type, segments.new_versus_returning_customers, segments.product_store_id, [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt). Except: [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt).

## metrics.conversions_from_interactions_rate

Field descriptionConversions from interactions divided by the number of ad interactions
(such as clicks for text ads or views for video ads). This only includes
conversion actions which `include_in_conversions_metric` attribute is set
to `true`. If you use conversion-based bidding, your bid strategies will
optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), segments.ad_group, segments.asset_group, segments.campaign, segments.interaction_on_this_extension, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status. Except: [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.mobile_device_platform, segments.new_versus_returning_customers.

## metrics.conversions_from_interactions_value_per_interaction

Field descriptionThe value of conversions from interactions divided by the number of ad
interactions. This only includes conversion actions which
`include_in_conversions_metric` attribute is set to `true`. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_interactions_value_per_interaction. Plus: segments.ad_format_type, segments.ad_sub_format_type, segments.search_term_targeting_status, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), segments.match_type, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt).

## metrics.conversions_unique_query_clusters

Field descriptionUnique query intent cluster count for conversions.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), segments.year. Except: segments.day_of_week.

## metrics.conversions_value

Field descriptionThe value of conversions. This only includes conversion actions which
`include_in_conversions_metric` attribute is set to `true`. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), segments.ad_group, segments.ad_using_product_data, segments.ad_using_video, segments.asset_group, segments.campaign, segments.conversion_value_rule_primary_dimension, segments.interaction_on_this_extension, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt).

## metrics.conversions_value_by_conversion_date

Field descriptionThe value of conversions. This only includes conversion actions which
`include_in_conversions_metric` attribute is set to `true`. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions. When this column is selected with date, the values in date
column means the conversion date. Details for the `by_conversion_date`
columns are available at [Understand conversions by time with new
columns](https://support.google.com/google-ads/answer/9549009).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), segments.ad_sub_network_type, segments.conversion_adjustment, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.conversion_value_rule_primary_dimension, segments.geo_target_airport, segments.geo_target_canton, segments.geo_target_city, segments.geo_target_country, segments.geo_target_county, segments.geo_target_district, segments.geo_target_metro, segments.geo_target_most_specific_location, segments.geo_target_postal_code, segments.geo_target_province, segments.geo_target_region, segments.geo_target_state, segments.hour, segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, segments.match_type, segments.new_versus_returning_customers, segments.product_store_id, [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt). Except: [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt).

## metrics.conversions_value_per_cost

Field descriptionThe value of conversions divided by the cost of ad interactions. This only
includes conversion actions which include_in_conversions_metric attribute
is set to true. If you use conversion-based bidding, your bid strategies
will optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_interactions_value_per_interaction. Plus: [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), segments.ad_format_type, segments.ad_sub_format_type, segments.search_term_targeting_status, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt).

## metrics.cost_converted_currency_per_platform_comparable_conversion

Field descriptionThe cost of the platform comparable conversion in the currency of the
authorized customer.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.cost_micros

Field descriptionThe sum of your cost-per-click (CPC) and cost-per-thousand impressions
(CPM) costs during this period.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), segments.ad_using_product_data, segments.ad_using_video, segments.interaction_on_this_extension, segments.month_of_year, segments.search_term_targeting_status, [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt). Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.new_versus_returning_customers.

## metrics.cost_of_goods_sold_micros

Field descriptionCost of goods sold (COGS) is the total cost of the products you sold in
orders attributed to your ads.

How it works: You can add a cost of goods sold value to every product in
Merchant Center. If you report conversions with cart data, the products you
sold are matched with their cost of goods sold value and this can be used
to calculate the gross profit you made on each order.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt. The hat has a cost of goods sold value of $3, the shirt
has a cost of goods sold value of $5. The cost of goods sold for this order
is $8 = $3 + $5.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.cost_per_all_conversions

Field descriptionThe cost of ad interactions divided by all conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.mobile_device_platform, segments.new_versus_returning_customers, segments.slot.

## metrics.cost_per_conversion

Field descriptionThe cost of ad interactions divided by conversions. This only includes
conversion actions which `include_in_conversions_metric` attribute is set
to `true`. If you use conversion-based bidding, your bid strategies will
optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), segments.interaction_on_this_extension, segments.search_term_targeting_status. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.mobile_device_platform, segments.new_versus_returning_customers.

## metrics.cost_per_current_model_attributed_conversion

Field descriptionThe cost of ad interactions divided by current model attributed
conversions. This only includes conversion actions which
`include_in_conversions_metric` attribute is set to `true`. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views. Plus: segments.click_type, segments.device, [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt). Except: segments.month_of_year.

## metrics.cost_per_platform_comparable_conversion

Field descriptionThe cost of ad interactions divided by the number of platform comparable
conversions. This only includes conversion actions for which
include_in_conversions_metric attribute is set to true. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.cross_device_conversions

Field descriptionConversions from when a customer clicks on a Google Ads ad on one device,
then converts on a different device or browser.
Cross-device conversions are already included in `all_conversions`.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: segments.month_of_year. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.ad_destination_type, segments.hour, segments.loyalty_membership, segments.mobile_device_platform, segments.new_versus_returning_customers, segments.slot, segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region.

## metrics.cross_device_conversions_by_conversion_date

Field descriptionThe number of cross-device conversions by conversion date.
Details for the `by_conversion_date` columns are available at [Understand
conversions by time with new
columns](https://support.google.com/google-ads/answer/9549009)
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt)

**Segments:** date, day_of_week, geo_target_airport, geo_target_canton, geo_target_city, geo_target_country, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, month, quarter, week, year

## metrics.cross_device_conversions_value_by_conversion_date

Field descriptionThe sum of cross-device conversions value by conversion date.
Details for the `by_conversion_date` columns are available at [Understand
conversions by time with new
columns](https://support.google.com/google-ads/answer/9549009)
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.cross_device_conversions_by_conversion_date.

## metrics.cross_device_conversions_value_micros

Field descriptionThe sum of the value of cross-device conversions, in micros.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt)

**Segments:** date, day_of_week, match_type, month, quarter, week, year

## metrics.cross_sell_cost_of_goods_sold_micros

Field descriptionCross-sell cost of goods sold (COGS) is the total cost of products sold as
a result of advertising a different product.

How it works: You report conversions with cart data for completed purchases
on your website. If the ad that was interacted with before the purchase has
an associated product (see Shopping Ads) then this product is considered
the advertised product. Any product included in the order the customer
places is a sold product. If these products don't match then this is
considered cross-sell. Cross-sell cost of goods sold is the total cost of
the products sold that weren't advertised.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt. The hat has a cost of goods sold value of $3, the shirt
has a cost of goods sold value of $5. The cross-sell cost of goods sold for
this order is $5.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.cross_sell_gross_profit_micros

Field descriptionCross-sell gross profit is the profit you made from products sold as a
result of advertising a different product, minus cost of goods sold (COGS).

How it works: You report conversions with cart data for completed purchases
on your website. If the ad that was interacted with before the purchase has
an associated product (see Shopping Ads) then this product is considered
the advertised product. Any product included in the purchase is a sold
product. If these products don't match then this is considered cross-sell.
Cross-sell gross profit is the revenue you made from cross-sell attributed
to your ads minus the cost of the goods sold.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt. The shirt is priced $20 and has a cost of goods sold value
of $5. The cross-sell gross profit of this order is $15 = $20 - $5.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.cross_sell_revenue_micros

Field descriptionCross-sell revenue is the total amount you made from products sold as a
result of advertising a different product.

How it works: You report conversions with cart data for completed purchases
on your website. If the ad that was interacted with before the purchase has
an associated product (see Shopping Ads) then this product is considered
the advertised product. Any product included in the order the customer
places is a sold product. If these products don't match then this is
considered cross-sell. Cross-sell revenue is the total value you made from
cross-sell attributed to your ads.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt. The hat is priced $10 and the shirt is priced $20. The
cross-sell revenue of this order is $20.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.cross_sell_units_sold

Field descriptionCross-sell units sold is the total number of products sold as a result of
advertising a different product.

How it works: You report conversions with cart data for completed purchases
on your website. If the ad that was interacted with before the purchase has
an associated product (see Shopping Ads) then this product is considered
the advertised product. Any product included in the order the customer
places is a sold product. If these products don't match then this is
considered cross-sell. Cross-sell units sold is the total number of
cross-sold products from all orders attributed to your ads.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat, a shirt and a jacket. The cross-sell units sold in this order is 2.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.ctr

Field descriptionThe number of clicks your ad receives (Clicks) divided by the number
of times your ad is shown (Impressions).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), segments.ad_group, segments.asset_group, segments.campaign, segments.interaction_on_this_extension, segments.month_of_year, segments.search_engine_results_page_type, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status. Except: [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.ad_destination_type, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.mobile_device_platform, segments.new_versus_returning_customers.

## metrics.current_model_attributed_conversions

Field descriptionShows how your historic conversions data would look under the attribution
model you've currently selected. This only includes conversion actions
which include_in_conversions_metric attribute is set to true. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_new_customer_lifetime_value. Plus: [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), segments.click_type, segments.device, segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt). Except: [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), segments.hour.

## metrics.current_model_attributed_conversions_from_interactions_rate

Field descriptionCurrent model attributed conversions from interactions divided by the
number of ad interactions (such as clicks for text ads or views for video
ads). This only includes conversion actions which
include_in_conversions_metric attribute is set to true. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views. Plus: segments.click_type, segments.device. Except: segments.month_of_year.

## metrics.current_model_attributed_conversions_from_interactions_value_per_interaction

Field descriptionThe value of current model attributed conversions from interactions divided
by the number of ad interactions. This only includes conversion actions
which include_in_conversions_metric attribute is set to true. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views. Plus: segments.click_type, segments.device. Except: segments.month_of_year.

## metrics.current_model_attributed_conversions_value

Field descriptionThe value of current model attributed conversions. This only includes
conversion actions which include_in_conversions_metric attribute is set to
true. If you use conversion-based bidding, your bid strategies will
optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_new_customer_lifetime_value. Plus: [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), segments.click_type, segments.device, segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt). Except: [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), segments.hour.

## metrics.current_model_attributed_conversions_value_per_cost

Field descriptionThe value of current model attributed conversions divided by the cost of ad
interactions. This only includes conversion actions which
include_in_conversions_metric attribute is set to true. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views. Plus: segments.click_type, segments.device. Except: segments.month_of_year.

## metrics.eligible_impressions_from_location_asset_store_reach

Field descriptionNumber of impressions in which the business location was shown or the
location was used for targeting. This measure is coming from Asset based
location.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.engagement_rate

Field descriptionThe frequency with which people engage with your ad after it's shown to
them. This is the number of ad expansions divided by the number of times
your ad is shown.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost. Plus: segments.ad_format_type, segments.ad_sub_format_type, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.click_type, segments.geo_target_airport, segments.geo_target_canton, segments.geo_target_city, segments.geo_target_county, segments.geo_target_district, segments.geo_target_metro, segments.geo_target_most_specific_location, segments.geo_target_postal_code, segments.geo_target_province, segments.geo_target_region, segments.geo_target_state, [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt).

## metrics.engagements

Field descriptionThe number of engagements.
An engagement occurs when a viewer expands your Lightbox ad. Also, in the
future, other ad types may support engagement metrics.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost. Plus: segments.ad_format_type, segments.ad_sub_format_type, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.click_type, segments.geo_target_airport, segments.geo_target_canton, segments.geo_target_city, segments.geo_target_county, segments.geo_target_district, segments.geo_target_metro, segments.geo_target_most_specific_location, segments.geo_target_postal_code, segments.geo_target_province, segments.geo_target_region, segments.geo_target_state, [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt).

## metrics.general_invalid_click_rate

Field descriptionThe percentage of clicks that have been filtered out of your total number
of clicks (filtered + non-filtered clicks) due to being general invalid
clicks. These are clicks Google considers illegitimate that are detected
through routine means of filtration (that is, known invalid data-center
traffic, bots and spiders or other crawlers, irregular patterns, etc).
You're not charged for them, and they don't affect your account statistics.
See
[Filtering invalid traffic to ensure
quality](https://support.google.com/campaignmanager/answer/6076504).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: segments.ad_network_type, segments.ad_sub_network_type, segments.click_type, segments.device, segments.year.

## metrics.general_invalid_clicks

Field descriptionNumber of general invalid clicks. These are a subset of your invalid clicks
that are detected through routine means of filtration (such as known
invalid data-center traffic, bots and spiders or other crawlers, irregular
patterns, etc.). You're not charged for them, and they don't affect your
account statistics. See
[Filtering invalid traffic to ensure
quality](https://support.google.com/campaignmanager/answer/6076504).
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: segments.ad_network_type, segments.ad_sub_network_type, segments.click_type, segments.device, segments.year.

## metrics.gmail_forwards

Field descriptionThe number of times the ad was forwarded to someone else as a message.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm. Plus: [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), segments.month_of_year, segments.slot. Except: [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), segments.hour, segments.landing_page_source, [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

## metrics.gmail_saves

Field descriptionThe number of times someone has saved your Gmail ad to their inbox as a
message.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm. Plus: [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), segments.month_of_year, segments.slot. Except: [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), segments.hour, segments.landing_page_source, [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

## metrics.gmail_secondary_clicks

Field descriptionThe number of clicks to the landing page on the expanded state of Gmail
ads.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm. Plus: [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), segments.month_of_year, segments.slot. Except: [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), segments.hour, segments.landing_page_source, [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

## metrics.gross_profit_margin

Field descriptionGross profit margin is the percentage gross profit you made from orders
attributed to your ads, after taking out the cost of goods sold (COGS).

How it works: You report conversions with cart data for completed purchases
on your website. Gross profit margin is the gross profit you made divided
by your total revenue and multiplied by 100%. Gross profit margin
calculations only include products that have a cost of goods sold value in
Merchant Center.

Example: Someone bought a hat and a shirt in an order on your website. The
hat is priced $10 and has a cost of goods sold value of $3. The shirt is
priced $20 but has no cost of goods sold value. Gross profit margin for
this order will only take into account the hat because it has a cost of
goods sold value, so it's 70% = ($10 - $3)/$10 x 100%.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.gross_profit_micros

Field descriptionGross profit is the profit you made from orders attributed to your ads
minus the cost of goods sold (COGS).

How it works: Gross profit is the revenue you made from sales attributed to
your ads minus cost of goods sold. Gross profit calculations only include
products that have a cost of goods sold value in Merchant Center.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt in an order from your website. The hat is priced $10 and
the shirt is priced $20. The hat has a cost of goods sold value of $3, but
the shirt has no cost of goods sold value. Gross profit for this order will
only take into account the hat, so it's $7 = $10 - $3.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.historical_creative_quality_score

Field descriptionThe creative historical quality score.
Category`METRIC` Data Type`ENUM`
`ABOVE_AVERAGE``AVERAGE``BELOW_AVERAGE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.QualityScoreBucketEnum.QualityScoreBucket` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt)

**Segments:** date, month, month_of_year, quarter, week, year

## metrics.historical_landing_page_quality_score

Field descriptionThe quality of historical landing page experience.
Category`METRIC` Data Type`ENUM`
`ABOVE_AVERAGE``AVERAGE``BELOW_AVERAGE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.QualityScoreBucketEnum.QualityScoreBucket` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.historical_creative_quality_score.

## metrics.historical_quality_score

Field descriptionThe historical quality score.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.historical_creative_quality_score.

## metrics.historical_search_predicted_ctr

Field descriptionThe historical search predicted clickthrough rate (CTR).
Category`METRIC` Data Type`ENUM`
`ABOVE_AVERAGE``AVERAGE``BELOW_AVERAGE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.QualityScoreBucketEnum.QualityScoreBucket` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.historical_creative_quality_score.

## metrics.impressions

Field descriptionThe number of times your ad has appeared on a search results page or
website on the Google Network.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [ad_group_ad_asset_combination_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_combination_view.md.txt), [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [detail_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_content_suitability_placement_view.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), [group_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_content_suitability_placement_view.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), [performance_max_placement_view](https://developers.google.com/google-ads/api/fields/v26/performance_max_placement_view.md.txt), segments.ad_group, segments.ad_using_product_data, segments.ad_using_video, segments.asset_group, segments.campaign, segments.interaction_on_this_extension, segments.month_of_year, segments.search_engine_results_page_type, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status, [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt). Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.ad_destination_type, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.mobile_device_platform, segments.new_versus_returning_customers.

## metrics.impressions_unique_query_clusters

Field descriptionUnique query intent cluster count for impressions.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), segments.year. Except: segments.day_of_week.

## metrics.interaction_event_types

Field descriptionThe types of payable and free interactions.
Category`METRIC` Data Type`ENUM`
`CLICK``ENGAGEMENT``NONE``UNKNOWN``UNSPECIFIED``VIDEO_VIEW` Type URL`google.ads.googleads.v26.enums.InteractionEventTypeEnum.InteractionEventType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost. Plus: [campaign_bid_modifier](https://developers.google.com/google-ads/api/fields/v26/campaign_bid_modifier.md.txt), segments.ad_using_product_data, segments.ad_using_video. Except: [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt).

## metrics.interaction_rate

Field descriptionThe frequency with which people interact with your ad after it is shown to
them. This is the number of interactions divided by the number of times
your ad is shown.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost.

## metrics.interactions

Field descriptionThe number of interactions.
An interaction is the main user action associated with an ad format-clicks
for text and shopping ads, views for video ads, and so on.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost. Plus: segments.ad_destination_type, segments.ad_using_product_data, segments.ad_using_video.

## metrics.invalid_click_rate

Field descriptionThe percentage of clicks filtered out of your total number of clicks
(filtered + non-filtered clicks) during the reporting period.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: segments.ad_network_type, segments.ad_sub_network_type, segments.click_type, segments.device, segments.year.

## metrics.invalid_clicks

Field descriptionNumber of clicks Google considers illegitimate and doesn't charge you for.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_click_to_call. Plus: segments.ad_network_type, segments.ad_sub_network_type, segments.click_type, segments.device, segments.year.

## metrics.lead_cost_of_goods_sold_micros

Field descriptionLead cost of goods sold (COGS) is the total cost of products sold as a
result of advertising the same product.

How it works: You report conversions with cart data for completed purchases
on your website. If the ad that was interacted with has an associated
product (see Shopping Ads) then this product is considered the advertised
product. Any product included in the order the customer places is a sold
product. If the advertised and sold products match, then the cost of these
goods is counted under lead cost of goods sold.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt. The hat has a cost of goods sold value of $3, the shirt
has a cost of goods sold value of $5. The lead cost of goods sold for this
order is $3.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.lead_gross_profit_micros

Field descriptionLead gross profit is the profit you made from products sold as a result of
advertising the same product, minus cost of goods sold (COGS).

How it works: You report conversions with cart data for completed purchases
on your website. If the ad that was interacted with before the purchase has
an associated product (see Shopping Ads) then this product is considered
the advertised product. Any product included in the order the customer
places is a sold product. If the advertised and sold products match, then
the revenue you made from these sales minus the cost of goods sold is your
lead gross profit.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt. The hat is priced $10 and has a cost of goods sold value
of $3. The lead gross profit of this order is $7 = $10 - $3.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.lead_revenue_micros

Field descriptionLead revenue is the total amount you made from products sold as a result of
advertising the same product.

How it works: You report conversions with cart data for completed purchases
on your website. If the ad that was interacted with before the purchase has
an associated product (see Shopping Ads) then this product is considered
the advertised product. Any product included in the order the customer
places is a sold product. If the advertised and sold products match, then
the total value you made from the sales of these products is shown under
lead revenue.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt. The hat is priced $10 and the shirt is priced $20. The
lead revenue of this order is $10.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.lead_units_sold

Field descriptionLead units sold is the total number of products sold as a result of
advertising the same product.

How it works: You report conversions with cart data for completed purchases
on your website. If the ad that was interacted with before the purchase has
an associated product (see Shopping Ads) then this product is considered
the advertised product. Any product included in the order the customer
places is a sold product. If the advertised and sold products match, then
the total number of these products sold is shown under lead units sold.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat, a shirt and a jacket. The lead units sold in this order is 1.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.new_customer_lifetime_value

Field descriptionNew customers' lifetime conversion value. If you have set up
customer acquisition goal at either account level or campaign level, this
will include the additional conversion value from new customers for
biddable conversions. If your campaign has adopted the customer
acquisition goal and selected "bid higher for new customers", these values
will be included in "conversions_value" for optimization. See
[About customer lifecycle
goals](https://support.google.com/google-ads/answer/12080169) for more
details.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_new_customer_lifetime_value. Plus: segments.slot.

## metrics.optimization_score_uplift

Field descriptionTotal optimization score uplift of all recommendations.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** recommendation_type

## metrics.optimization_score_url

Field descriptionURL for the optimization score page in the Google Ads web interface.
This metric can be selected from `customer` or `campaign`, and can be
segmented by `segments.recommendation_type`.

For example, `SELECT metrics.optimization_score_url,
segments.recommendation_type FROM customer` will return a URL for each
unique (customer, recommendation_type) combination.
Category`METRIC` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.optimization_score_uplift.

## metrics.orders

Field descriptionOrders is the total number of purchase conversions you received attributed
to your ads.

How it works: You report conversions with cart data for
completed purchases on your website. If a conversion is attributed to
previous interactions with your ads (clicks for text or Shopping ads, views
for video ads etc.) it's counted as an order.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt in an order on your website. Even though they bought 2
products, this would count as 1 order.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: segments.ad_sub_network_type, segments.month_of_year, segments.slot.

## metrics.original_conversion_value

Field descriptionThe original conversion value from biddable conversions. This is the
unadjusted value of conversions before any value rule adjustments, such as
conversion value rules or lifecycle goals adjustments are applied.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_new_customer_lifetime_value. Plus: segments.slot.

## metrics.percent_new_visitors

Field descriptionPercentage of first-time sessions (from people who had never visited your
site before). Imported from Google Analytics.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views.

## metrics.phone_calls

Field descriptionNumber of offline phone calls.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views. Plus: [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), segments.click_type, segments.hour, segments.interaction_on_this_extension, segments.match_type.

## metrics.phone_impressions

Field descriptionNumber of offline phone impressions.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views. Plus: [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), segments.click_type, segments.interaction_on_this_extension. Except: [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt).

## metrics.phone_through_rate

Field descriptionNumber of phone calls received (`phone_calls`) divided by the number of
times your phone number is shown (`phone_impressions`).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views. Plus: [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), segments.click_type, segments.interaction_on_this_extension. Except: [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt).

## metrics.platform_comparable_conversions

Field descriptionThe number of platform comparable conversions. This only includes
conversion actions for which include_in_conversions_metric attribute is set
to true. If you use conversion-based bidding, your bid strategies will
optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.platform_comparable_conversions_by_conversion_date

Field descriptionThe number of platform comparable conversions. When this metric is
segmented by date, the values in the date segment represent the conversion
date. This only includes conversion actions for which
include_in_conversions_metric attribute is set to true. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.platform_comparable_conversions_from_interactions_rate

Field descriptionPlatform comparable conversions from interactions divided by the number of
ad interactions (such as clicks for text ads or views for video ads). This
only includes conversion actions for which include_in_conversions_metric
attribute is set to true. If you use conversion-based bidding, your bid
strategies will optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.platform_comparable_conversions_from_interactions_value_per_interaction

Field descriptionThe value of platform comparable conversions from interactions divided by
the number of ad interactions. This only includes conversion actions for
which include_in_conversions_metric attribute is set to true. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.platform_comparable_conversions_value

Field descriptionThe value of platform comparable conversions. This only includes conversion
actions which include_in_conversions_metric attribute is set to true. If
you use conversion-based bidding, your bid strategies will optimize for
these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.conversion_value_rule_primary_dimension, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.platform_comparable_conversions_value_by_conversion_date

Field descriptionThe value of platform comparable conversions. When this metric is segmented
by date, the values in the date segment represent the conversion date. This
only includes conversion actions for which include_in_conversions_metric
attribute is set to true. If you use conversion-based bidding, your bid
strategies will optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.conversion_value_rule_primary_dimension, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.platform_comparable_conversions_value_per_cost

Field descriptionThe value of conversions divided by the cost of ad interactions. This only
includes conversion actions for which include_in_conversions_metric
attribute is set to true. If you use conversion-based bidding, your bid
strategies will optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.primary_impressions

Field descriptionPrimary impression is counted each time your ad is served. This metric is
only available for the Campaign resource with adjusted_age_range and
adjusted_gender segments. These segmentations are mandatory to get the
primary impressions.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** adjusted_age_range, adjusted_gender, date, device, month, week

## metrics.relative_ctr

Field descriptionYour clickthrough rate (CTR) divided by the average clickthrough rate of
all advertisers on the websites that show your ads. Measures how your ads
perform on Display Network sites compared to other ads on the same sites.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.historical_creative_quality_score. Plus: segments.ad_network_type, segments.ad_sub_network_type, segments.day_of_week. Except: [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt).

## metrics.revenue_micros

Field descriptionRevenue is the total amount you made from orders attributed to your ads.

How it works: You report conversions with cart data for completed purchases
on your website. Revenue is the total value of all the orders you received
attributed to your ads, minus any discount.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat and a shirt in an order from your website. The hat is priced $10 and
the shirt is priced $20. The entire order has a $5 discount. The revenue
from this order is $25 = ($10 + $20) - $5.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.search_absolute_top_impression_share

Field descriptionThe percentage of the customer's Shopping or Search ad impressions that are
shown in the absolute top position (Position 1). See
[About top and
absolute top metrics](https://support.google.com/google-ads/answer/7501826)

for details. Any value below 0.1 is reported as 0.0999.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_format_type, ad_network_type, ad_sub_network_type, date, day_of_week, device, external_activity_id, geo_target_country, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, match_type, month, month_of_year, partner_hotel_id, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_item_id, product_language, product_merchant_id, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, travel_destination_city, travel_destination_country, travel_destination_region, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_vertical, week, year

## metrics.search_budget_lost_absolute_top_impression_share

Field descriptionThe estimated percentage of times your ad wasn't the very first ad among
the top ads in the search results due to a low budget.

Note: Search budget lost absolute top impression share is reported in the
range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.search_absolute_top_impression_share. Except: [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt).

## metrics.search_budget_lost_impression_share

Field descriptionThe estimated percentage of times that your ad was eligible to show on the
Search Network but didn't because your budget was too low.

Note: Search
budget lost impression share is reported in the range of 0 to 0.9. Any
value above 0.9 is reported as 0.9001.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.search_absolute_top_impression_share. Except: [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), segments.month_of_year, segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt).

## metrics.search_budget_lost_top_impression_share

Field descriptionThe estimated percentage of times that your ad didn't show adjacent to the
top organic search results due to a low budget.

Note: Search budget lost top impression share is reported in the range of 0
to 0.9. Any value above 0.9 is reported as 0.9001.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_format_type, ad_network_type, ad_sub_network_type, date, day_of_week, device, external_activity_id, geo_target_country, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, match_type, month, partner_hotel_id, quarter, week, year

## metrics.search_click_share

Field descriptionThe number of clicks you've received on the Search Network
divided by the estimated number of clicks you were eligible to receive.

Note: Search click share is reported in the range of 0.1 to 1. Any value
below 0.1 is reported as 0.0999.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.search_absolute_top_impression_share. Plus: segments.advance_booking_window, segments.length_of_booking, segments.start_date, segments.start_day_of_week, segments.user_set_dates, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type. Except: segments.activity_account_id, segments.activity_city, segments.activity_country, segments.activity_rating, segments.activity_state, segments.ad_format_type, segments.external_activity_id, segments.hour, segments.match_type, segments.month_of_year, segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt).

## metrics.search_exact_match_impression_share

Field descriptionThe impressions you've received divided by the estimated number of
impressions you were eligible to receive on the Search Network for search
terms that matched your keywords exactly (or were close variants of your
keyword), regardless of your keyword match types.

Note: Search exact match impression share is reported in the range of 0.1
to 1. Any value below 0.1 is reported as 0.0999.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_page_views. Plus: segments.device. Except: [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, segments.month_of_year.

## metrics.search_impression_share

Field descriptionThe impressions you've received on the Search Network divided
by the estimated number of impressions you were eligible to receive.

Note: Search impression share is reported in the range of 0.1 to 1. Any
value below 0.1 is reported as 0.0999.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.search_absolute_top_impression_share. Plus: [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt). Except: segments.month_of_year, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt).

## metrics.search_rank_lost_absolute_top_impression_share

Field descriptionThe estimated percentage of times your ad wasn't the very first ad among
the top ads in the search results due to poor Ad Rank.

Note: Search rank lost absolute top impression share is reported in the
range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.search_absolute_top_impression_share. Except: [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt).

## metrics.search_rank_lost_impression_share

Field descriptionThe estimated percentage of impressions on the Search Network
that your ads didn't receive due to poor Ad Rank.
Note: Search rank lost impression share is reported in the range of 0 to
0.9. Any value above 0.9 is reported as 0.9001.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.search_absolute_top_impression_share. Except: [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), segments.month_of_year, segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt).

## metrics.search_rank_lost_top_impression_share

Field descriptionThe estimated percentage of times your ad didn't show adjacent to the top
organic search results due to poor Ad Rank.

Note: Search rank lost top impression share is reported in the range of 0
to 0.9. Any value above 0.9 is reported as 0.9001.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.search_budget_lost_top_impression_share.

## metrics.search_top_impression_share

Field descriptionThe impressions you've received among the top ads compared to the estimated
number of impressions you were eligible to receive among the top ads.
Note: Search top impression share is reported in the range of 0.1 to 1. Any
value below 0.1 is reported as 0.0999.

Top ads are typically above the top organic results, although they may show
below the top organic results on certain queries.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.search_budget_lost_top_impression_share. Plus: segments.advance_booking_window, segments.length_of_booking, segments.start_date, segments.start_day_of_week, segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region, segments.user_set_dates, segments.vertical_ads_event_participant_display_names, segments.vertical_ads_hotel_class, segments.vertical_ads_listing, segments.vertical_ads_listing_brand, segments.vertical_ads_listing_city, segments.vertical_ads_listing_country, segments.vertical_ads_listing_region, segments.vertical_ads_listing_user_rating, segments.vertical_ads_listing_venue, segments.vertical_ads_partner_account, segments.vertical_ads_price_tier, segments.vertical_ads_rate_rule_id, segments.vertical_ads_rate_type, segments.vertical_ads_vertical.

## metrics.sk_ad_network_installs

Field descriptionThe number of iOS Store Kit Ad Network conversions.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: metrics.sk_ad_network_installs, metrics.sk_ad_network_total_conversions.

## metrics.sk_ad_network_total_conversions

Field descriptionThe total number of iOS Store Kit Ad Network conversions.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.sk_ad_network_ad_event_type. Plus: segments.sk_ad_network_ad_event_type. Except: metrics.sk_ad_network_installs, metrics.sk_ad_network_total_conversions.

## metrics.svr

Field descriptionThis feature is available to allowlisted accounts only.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.primary_impressions. Plus: segments.ad_format_type, segments.ad_sub_format_type, segments.day_of_week.

## metrics.top_impression_percentage

Field descriptionThe percentage of your ad impressions that are shown adjacent to the top
organic search results.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.absolute_top_impression_percentage. Except: [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt).

## metrics.trueview_average_cpv

Field descriptionThe average amount you pay each time someone views your ad.
The average CPV is defined by the total cost of all ad views divided by
the number of TrueView views.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost. Plus: segments.ad_format_type, segments.ad_sub_format_type, segments.asset_interaction_target.asset, segments.asset_interaction_target.interaction_on_this_asset, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.click_type, segments.month_of_year, segments.slot.

## metrics.unique_users

Field descriptionThe number of unique users who saw your ad during the requested time
period. This metric cannot be aggregated, and can only be requested for
date ranges of 92 days or less. This metric is available for following
campaign types - Display, Video, Discovery and App.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** ad_format_type, ad_network_type, ad_sub_format_type, ad_sub_network_type, adjusted_age_range, adjusted_gender, date, device

## metrics.unique_users_eight_plus

Field descriptionThis metric counts the unique individuals who were shown your video ad
eight or more times within the selected date range. This metric cannot be
aggregated, and can only be requested for date ranges of 31 days or less.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_eight_plus_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad eight
or more times within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_five_plus

Field descriptionThis metric counts the unique individuals who were shown your video ad five
or more times within the selected date range. This metric cannot be
aggregated, and can only be requested for date ranges of 31 days or less.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_five_plus_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad five
or more times within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_four_plus

Field descriptionThis metric counts the unique individuals who were shown your video ad four
or more times within the selected date range. This metric cannot be
aggregated, and can only be requested for date ranges of 31 days or less.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_four_plus_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad four
or more times within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad at
least once within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_nine_plus

Field descriptionThis metric counts the unique individuals who were shown your video ad nine
or more times within the selected date range. This metric cannot be
aggregated, and can only be requested for date ranges of 31 days or less.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_nine_plus_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad nine
or more times within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_seven_plus

Field descriptionThis metric counts the unique individuals who were shown your video ad
seven or more times within the selected date range. This metric cannot be
aggregated, and can only be requested for date ranges of 31 days or less.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_seven_plus_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad seven
or more times within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_six_plus

Field descriptionThis metric counts the unique individuals who were shown your video ad six
or more times within the selected date range. This metric cannot be
aggregated, and can only be requested for date ranges of 31 days or less.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_six_plus_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad six
or more times within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_ten_plus

Field descriptionThis metric counts the unique individuals who were shown your video ad ten
or more times within the selected date range. This metric cannot be
aggregated, and can only be requested for date ranges of 31 days or less.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_ten_plus_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad ten
or more times within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_three_plus

Field descriptionThis metric counts the unique individuals who were shown your video ad
three or more times within the selected date range. This metric cannot be
aggregated, and can only be requested for date ranges of 31 days or less.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_three_plus_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad three
or more times within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_two_plus

Field descriptionThis metric counts the unique individuals who were shown your video ad two
or more times within the selected date range. This metric cannot be
aggregated, and can only be requested for date ranges of 31 days or less.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.unique_users_two_plus_info

Field descriptionAdditional information (e.g. quality of reach data) about the metric
representing the number of unique individuals who were shown your ad two
or more times within the selected date range.
Category`METRIC` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ReachMetricInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.unique_users. Except: segments.adjusted_age_range, segments.adjusted_gender.

## metrics.units_sold

Field descriptionUnits sold is the total number of products sold from orders attributed to
your ads.

How it works: You report conversions with cart data for completed purchases
on your website. Units sold is the total number of products sold from all
orders attributed to your ads.

Example: Someone clicked on a Shopping ad for a hat then bought the same
hat, a shirt and a jacket. The units sold in this order is 3.

This metric is only available if you report conversions with cart data.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [cart_data_sales_view](https://developers.google.com/google-ads/api/fields/v26/cart_data_sales_view.md.txt), segments.ad_sub_network_type, segments.month_of_year, segments.product_sold_brand, segments.product_sold_category_level1, segments.product_sold_category_level2, segments.product_sold_category_level3, segments.product_sold_category_level4, segments.product_sold_category_level5, segments.product_sold_condition, segments.product_sold_custom_attribute0, segments.product_sold_custom_attribute1, segments.product_sold_custom_attribute2, segments.product_sold_custom_attribute3, segments.product_sold_custom_attribute4, segments.product_sold_item_id, segments.product_sold_title, segments.product_sold_type_l1, segments.product_sold_type_l2, segments.product_sold_type_l3, segments.product_sold_type_l4, segments.product_sold_type_l5, segments.slot.

## metrics.value_per_all_conversions

Field descriptionThe value of all conversions divided by the number of all conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.ad_destination_type, segments.mobile_device_platform, segments.slot.

## metrics.value_per_all_conversions_by_conversion_date

Field descriptionThe value of all conversions divided by the number of all conversions. When
this column is selected with date, the values in date column means the
conversion date. Details for the `by_conversion_date` columns are available
at [Understand conversions by time with new
columns](https://support.google.com/google-ads/answer/9549009).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), segments.ad_sub_network_type, segments.conversion_adjustment, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.geo_target_airport, segments.geo_target_canton, segments.geo_target_city, segments.geo_target_country, segments.geo_target_county, segments.geo_target_district, segments.geo_target_metro, segments.geo_target_most_specific_location, segments.geo_target_postal_code, segments.geo_target_province, segments.geo_target_region, segments.geo_target_state, segments.hour, segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, segments.match_type, segments.new_versus_returning_customers, segments.product_store_id, [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt). Except: [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt).

## metrics.value_per_conversion

Field descriptionThe value of conversions divided by the number of conversions. This only
includes conversion actions for which the `include_in_conversions_metric`
attribute is set to `true`. If you use conversion-based bidding, your bid
strategies will optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: segments.interaction_on_this_extension, segments.search_term_targeting_status. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.ad_destination_type, segments.mobile_device_platform.

## metrics.value_per_conversions_by_conversion_date

Field descriptionThe value of conversions divided by the number of conversions. This only
includes conversion actions for which the `include_in_conversions_metric`
attribute is set to `true`. If you use conversion-based bidding, your bid
strategies will optimize for these conversions. When this column is
selected with date, the values in date column means the conversion date.
Details for the `by_conversion_date` columns are available at [Understand
conversions by time with new
columns](https://support.google.com/google-ads/answer/9549009).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_average_cart_size. Plus: [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [hotel_reconciliation](https://developers.google.com/google-ads/api/fields/v26/hotel_reconciliation.md.txt), segments.ad_sub_network_type, segments.conversion_adjustment, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.geo_target_airport, segments.geo_target_canton, segments.geo_target_city, segments.geo_target_country, segments.geo_target_county, segments.geo_target_district, segments.geo_target_metro, segments.geo_target_most_specific_location, segments.geo_target_postal_code, segments.geo_target_province, segments.geo_target_region, segments.geo_target_state, segments.hour, segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, segments.match_type, segments.new_versus_returning_customers, segments.product_store_id, [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt). Except: [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt).

## metrics.value_per_current_model_attributed_conversion

Field descriptionThe value of current model attributed conversions divided by the number of
the conversions. This only includes conversion actions for which the
`include_in_conversions_metric` attribute is set to `true`. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_new_customer_lifetime_value. Plus: [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), segments.click_type, segments.device, segments.keyword.ad_group_criterion, segments.keyword.info.match_type, segments.keyword.info.text, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt). Except: [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), segments.hour.

## metrics.value_per_platform_comparable_conversion

Field descriptionThe value of platform comparable conversions divided by the number of
platform comparable conversions. This only includes conversion actions for
which include_in_conversions_metric attribute is set to true. If you use
conversion-based bidding, your bid strategies will optimize for these
conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.value_per_platform_comparable_conversions_by_conversion_date

Field descriptionThe value of platform comparable conversions divided by the number of
platform comparable conversions. When this metric is segmented by date, the
values in the date segment represent the conversion date. This only
includes conversion actions for which include_in_conversions_metric
attribute is set to true. If you use conversion-based bidding, your bid
strategies will optimize for these conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: segments.ad_destination_type, segments.click_type, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.month_of_year, segments.slot, [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.vertical_ads_average_booking_value_micros

Field descriptionClick-weighted average daily rate in micros, including taxes and fees, over
the total length of stay.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt)

**Segments:** date, day_of_week, device, geo_target_country, hour, month, quarter, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, week, year

## metrics.vertical_ads_potential_impressions

Field descriptionPotential impressions representing the total view-capped eligible
impressions available across the query context.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.vertical_ads_average_booking_value_micros. Plus: segments.ad_format_type.

## metrics.vertical_ads_price_difference_percentage

Field descriptionPercentage delta comparing the advertiser's offered price against the
lowest competing price for the same property.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.vertical_ads_average_booking_value_micros.

## metrics.video_quartile_p100_rate

Field descriptionPercentage of impressions where the viewer watched all of your video.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), segments.ad_format_type, segments.ad_sub_format_type, segments.match_type, segments.search_term_match_source, segments.search_term_match_type, segments.search_term_targeting_status, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), segments.click_type, segments.landing_page_source, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

## metrics.video_quartile_p25_rate

Field descriptionPercentage of impressions where the viewer watched 25% of your video.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), segments.ad_format_type, segments.ad_sub_format_type, segments.match_type, segments.search_term_match_source, segments.search_term_match_type, segments.search_term_targeting_status, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), segments.click_type, segments.landing_page_source, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

## metrics.video_quartile_p50_rate

Field descriptionPercentage of impressions where the viewer watched 50% of your video.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), segments.ad_format_type, segments.ad_sub_format_type, segments.match_type, segments.search_term_match_source, segments.search_term_match_type, segments.search_term_targeting_status, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), segments.click_type, segments.landing_page_source, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

## metrics.video_quartile_p75_rate

Field descriptionPercentage of impressions where the viewer watched 75% of your video.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_cpm. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), segments.ad_format_type, segments.ad_sub_format_type, segments.match_type, segments.search_term_match_source, segments.search_term_match_type, segments.search_term_targeting_status, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), segments.click_type, segments.landing_page_source, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

## metrics.video_trueview_view_rate

Field descriptionThe number of TrueView views your video ad receives divided by its number
of impressions, including thumbnail impressions for TrueView in-display
ads.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost. Plus: segments.ad_format_type, segments.ad_sub_format_type, segments.asset_interaction_target.asset, segments.asset_interaction_target.interaction_on_this_asset, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.click_type, segments.month_of_year, segments.slot, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

## metrics.video_trueview_view_rate_in_feed

Field descriptionThe number of TrueView views divided by number of impressions that can
potentially lead to TrueView views for in-feed formats.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.video_trueview_view_rate_in_stream

Field descriptionThe number of TrueView views divided by number of impressions that can
potentially lead to TrueView views for in-stream formats.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.video_trueview_view_rate_shorts

Field descriptionThe number of TrueView views divided by number of impressions that can
potentially lead to TrueView views for Shorts ads.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.hour.

## metrics.video_trueview_views

Field descriptionThe number of TrueView views your video ads received.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost. Plus: segments.ad_format_type, segments.ad_sub_format_type, segments.asset_interaction_target.asset, segments.asset_interaction_target.interaction_on_this_asset, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.click_type, segments.month_of_year, segments.slot, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

## metrics.video_watch_time_duration_millis

Field descriptionTotal watch time duration in milliseconds for video impressions that
started playing. For a small percentage of impressions, we may not be able
to measure the watch time accurately. In such cases, we adjust the total
time to account for any unmeasured time by applying the average watch time
of impressions that were measured.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: segments.ad_network_type, segments.ad_sub_network_type, segments.hour.

## metrics.view_through_conversions

Field descriptionThe total number of view-through conversions.
These happen when a customer sees an image or rich media ad, then later
completes a conversion on your site without interacting with (for example,
clicking on) another ad.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost. Plus: [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), segments.ad_format_type, segments.ad_sub_format_type, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.external_conversion_source, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.click_type, segments.landing_page_source, segments.month_of_year.

## metrics.view_through_conversions_from_location_asset_click_to_call

Field descriptionNumber of call button clicks on any location surface after an impression.
This measure is coming from Asset based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.view_through_conversions_from_location_asset_directions

Field descriptionNumber of driving directions clicks on any location surface after an
impression. This measure is coming from Asset based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.view_through_conversions_from_location_asset_menu

Field descriptionNumber of menu link clicks on any location surface after an impression.
This measure is coming from Asset based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.view_through_conversions_from_location_asset_order

Field descriptionNumber of order clicks on any location surface after an impression. This
measure is coming from Asset based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.view_through_conversions_from_location_asset_other_engagement

Field descriptionNumber of other types of local action clicks on any location surface after
an impression. This measure is coming from Asset based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.view_through_conversions_from_location_asset_store_visits

Field descriptionEstimated number of visits to the business after an impression.
This measure is coming from Asset based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.view_through_conversions_from_location_asset_website

Field descriptionNumber of website URL clicks on any location surface after an impression.
This measure is coming from Asset based location.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_location_asset_click_to_call.

## metrics.youtube_comments

Field descriptionThe number of comments on YouTube Shorts videos attributed to ad
impressions.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: [asset](https://developers.google.com/google-ads/api/fields/v26/asset.md.txt). Except: segments.ad_sub_format_type, segments.ad_sub_network_type, segments.day_of_week, segments.hour.

## metrics.youtube_likes

Field descriptionThe number of likes on YouTube Shorts videos attributed to ad impressions.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: [asset](https://developers.google.com/google-ads/api/fields/v26/asset.md.txt). Except: segments.ad_sub_format_type, segments.ad_sub_network_type, segments.day_of_week, segments.hour.

## metrics.youtube_shares

Field descriptionThe number of shares on YouTube Shorts videos attributed to ad impressions.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.active_view_audibility_invalid_givt_measurable_impressions_rate. Plus: [asset](https://developers.google.com/google-ads/api/fields/v26/asset.md.txt). Except: segments.ad_sub_format_type, segments.ad_sub_network_type, segments.day_of_week, segments.hour.
