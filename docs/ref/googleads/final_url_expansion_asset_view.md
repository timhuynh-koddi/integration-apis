# FinalUrlExpansionAsset View

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Queried with GAQL (`FROM final_url_expansion_asset_view`) through `GoogleAdsService.Search`/`SearchStream`; there are no dedicated REST methods. Field reference page: https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view

---

## Schemas

### `FinalUrlExpansionAssetView`

FinalUrlExpansionAssetView Resource.

| Field | Type | Description |
|---|---|---|
| finalUrl | string | Output only. Final URL of the FinalUrlExpansionAsset. |
| adGroup | string | Output only. Ad Group in which FinalUrlExpansionAsset served. |
| fieldType | string enum(UNSPECIFIED, UNKNOWN, HEADLINE, DESCRIPTION, MANDATORY_AD_TEXT, MARKETING_IMAGE, MEDIA_BUNDLE, YOUTUBE_VIDEO, BOOK_ON_GOOGLE, LEAD_FORM, PROMOTION, CALLOUT, STRUCTURED_SNIPPET, SITELINK, MOBILE_APP, HOTEL_CALLOUT, CALL, PRICE, LONG_HEADLINE, BUSINESS_NAME, SQUARE_MARKETING_IMAGE, PORTRAIT_MARKETING_IMAGE, LOGO, LANDSCAPE_LOGO, VIDEO, CALL_TO_ACTION_SELECTION, AD_IMAGE, BUSINESS_LOGO, HOTEL_PROPERTY, DEMAND_GEN_CAROUSEL_CARD, BUSINESS_MESSAGE, TALL_PORTRAIT_MARKETING_IMAGE, RELATED_YOUTUBE_VIDEOS, LANDING_PAGE_PREVIEW, LONG_DESCRIPTION, CALL_TO_ACTION, CLASSIC_DISPLAY_IMAGE, TEXT_DISCLAIMER) | Output only. The field type of the asset. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; HEADLINE - The asset is linked for use as a headline.; DESCRIPTION - The asset is linked for use as a description.; MANDATORY_AD_TEXT - The asset is linked for use as mandatory ad text.; MARKETING_IMAGE - The asset is linked for use as a marketing image.; MEDIA_BUNDLE - The asset is linked for use as a media bundle.; YOUTUBE_VIDEO - The asset is linked for use as a YouTube video.; BOOK_ON_GOOGLE - The asset is linked to indicate that a hotels campaign is "Book on Google" enabled.; LEAD_FORM - The asset is linked for use as a Lead Form extension.; PROMOTION - The asset is linked for use as a Promotion extension.; CALLOUT - The asset is linked for use as a Callout extension.; STRUCTURED_SNIPPET - The asset is linked for use as a Structured Snippet extension.; SITELINK - The asset is linked for use as a Sitelink.; MOBILE_APP - The asset is linked for use as a Mobile App extension.; HOTEL_CALLOUT - The asset is linked for use as a Hotel Callout extension.; CALL - The asset is linked for use as a Call extension.; PRICE - The asset is linked for use as a Price extension.; LONG_HEADLINE - The asset is linked for use as a long headline.; BUSINESS_NAME - The asset is linked for use as a business name.; SQUARE_MARKETING_IMAGE - The asset is linked for use as a square marketing image.; PORTRAIT_MARKETING_IMAGE - The asset is linked for use as a portrait marketing image.; LOGO - The asset is linked for use as a logo.; LANDSCAPE_LOGO - The asset is linked for use as a landscape logo.; VIDEO - The asset is linked for use as a non YouTube logo.; CALL_TO_ACTION_SELECTION - The asset is linked for use to select a call-to-action.; AD_IMAGE - The asset is linked for use to select an ad image.; BUSINESS_LOGO - The asset is linked for use as a business logo.; HOTEL_PROPERTY - The asset is linked for use as a hotel property in a Performance Max for travel goals campaign.; DEMAND_GEN_CAROUSEL_CARD - The asset is linked for use as a Demand Gen carousel card.; BUSINESS_MESSAGE - The asset is linked for use as a Business Message.; TALL_PORTRAIT_MARKETING_IMAGE - The asset is linked for use as a tall portrait marketing image.; RELATED_YOUTUBE_VIDEOS - The asset is linked for use as related YouTube videos.; LANDING_PAGE_PREVIEW - The asset is linked for use as a landing page preview image.; LONG_DESCRIPTION - The asset is linked for use as a long description.; CALL_TO_ACTION - The asset is linked for use as a call-to-action.; CLASSIC_DISPLAY_IMAGE - The asset is linked for use as a classic display image.; TEXT_DISCLAIMER - The asset is linked for use as a text disclaimer. |
| status | string enum(UNSPECIFIED, UNKNOWN, ENABLED, REMOVED, PAUSED) | Output only. Status of the FinalUrlExpansionAsset. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ENABLED - Asset link is enabled.; REMOVED - Asset link has been removed.; PAUSED - Asset link is paused. |
| assetGroup | string | Output only. Asset Group in which FinalUrlExpansionAsset served. |
| campaign | string | Output only. Campaign in which the asset served. |
| asset | string | Output only. The ID of the asset. |
| resourceName | string | Output only. The resource name of the FinalUrlExpansionAsset. |

---

## Field reference (verbatim from the Google field reference page)

[Help me build a query](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view_query_builder.md.txt) [Proto definition ![on GitHub](https://developers.google.com/site-assets/logo-github.svg)](https://github.com/googleapis/googleapis/blob/master/google/ads/googleads/v26/resources/final_url_expansion_asset_view.proto)

FinalUrlExpansionAssetView Resource.

| Attributed resources |
|---|
| [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt) |
| [asset](https://developers.google.com/google-ads/api/fields/v26/asset.md.txt) |
| [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt) |
| [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt) |

Fields from the preceding resources can be selected along with this
resource in your `SELECT` and `WHERE` clauses. These fields do **not** segment
metrics in your `SELECT` clause.

#### Fields, segments, and metrics

This page shows all metrics and segments that can be put in the same `SELECT` clause as the fields of `final_url_expansion_asset_view`.
However, when you specify `final_url_expansion_asset_view` in the `FROM` clause, some metrics and segments
cannot be used.
Use the following filter to show only the fields that can be used when `final_url_expansion_asset_view` is specified in the `FROM` clause.

Is `final_url_expansion_asset_view` specified in the `FROM` clause of your query?
No Yes, it is

| Resource fields |
|---|
| ad_group |
| asset |
| asset_group |
| campaign |
| field_type |
| final_url |
| resource_name |
| status |

| Segments |
|---|
| date |
| day_of_week |
| month |
| quarter |
| week |
| year |

| Metrics |
|---|
| all_conversions |
| all_conversions_from_interactions_rate |
| all_conversions_from_interactions_value_per_interaction |
| all_conversions_value |
| all_conversions_value_per_cost |
| average_cost |
| average_cpc |
| clicks |
| conversions |
| conversions_from_interactions_rate |
| conversions_from_interactions_value_per_interaction |
| conversions_value |
| conversions_value_per_cost |
| cost_micros |
| cost_per_all_conversions |
| cost_per_conversion |
| cross_device_conversions |
| cross_device_conversions_value |
| ctr |
| engagement_rate |
| engagements |
| impressions |
| interaction_rate |
| interactions |
| value_per_all_conversions |
| value_per_conversion |
| view_through_conversions |

## final_url_expansion_asset_view.ad_group

Field descriptionOutput only. Ad Group in which FinalUrlExpansionAsset served.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt)

## final_url_expansion_asset_view.asset

Field descriptionOutput only. The ID of the asset.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt)

## final_url_expansion_asset_view.asset_group

Field descriptionOutput only. Asset Group in which FinalUrlExpansionAsset served.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as final_url_expansion_asset_view.asset.

## final_url_expansion_asset_view.campaign

Field descriptionOutput only. Campaign in which the asset served.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as final_url_expansion_asset_view.asset.

## final_url_expansion_asset_view.field_type

Field descriptionOutput only. The field type of the asset.
Category`ATTRIBUTE` Data Type`ENUM`
`AD_IMAGE``BOOK_ON_GOOGLE``BUSINESS_LOGO``BUSINESS_MESSAGE``BUSINESS_NAME``CALL``CALLOUT``CALL_TO_ACTION``CALL_TO_ACTION_SELECTION``CLASSIC_DISPLAY_IMAGE``DEMAND_GEN_CAROUSEL_CARD``DESCRIPTION``HEADLINE``HOTEL_CALLOUT``HOTEL_PROPERTY``LANDING_PAGE_PREVIEW``LANDSCAPE_LOGO``LEAD_FORM``LOGO``LONG_DESCRIPTION``LONG_HEADLINE``MANDATORY_AD_TEXT``MARKETING_IMAGE``MEDIA_BUNDLE``MOBILE_APP``PORTRAIT_MARKETING_IMAGE``PRICE``PROMOTION``RELATED_YOUTUBE_VIDEOS``SITELINK``SQUARE_MARKETING_IMAGE``STRUCTURED_SNIPPET``TALL_PORTRAIT_MARKETING_IMAGE``TEXT_DISCLAIMER``UNKNOWN``UNSPECIFIED``VIDEO``YOUTUBE_VIDEO` Type URL`google.ads.googleads.v26.enums.AssetFieldTypeEnum.AssetFieldType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as final_url_expansion_asset_view.asset.

## final_url_expansion_asset_view.final_url

Field descriptionOutput only. Final URL of the FinalUrlExpansionAsset.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as final_url_expansion_asset_view.asset.

## final_url_expansion_asset_view.resource_name

Field descriptionOutput only. The resource name of the FinalUrlExpansionAsset.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as final_url_expansion_asset_view.asset.

## final_url_expansion_asset_view.status

Field descriptionOutput only. Status of the FinalUrlExpansionAsset.
Category`ATTRIBUTE` Data Type`ENUM`
`ENABLED``PAUSED``REMOVED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.AssetLinkStatusEnum.AssetLinkStatus` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as final_url_expansion_asset_view.asset.

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

## segments.month

Field descriptionMonth as represented by the date of the first day of a month. Formatted as
yyyy-MM-dd.
Category`SEGMENT` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.day_of_week. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), metrics.biddable_app_install_conversions, metrics.biddable_app_post_install_conversions, metrics.biddable_cohort_app_post_install_conversions, metrics.clicks_unique_query_clusters, metrics.conversion_last_conversion_date, metrics.conversion_last_received_request_date_time, metrics.conversions_unique_query_clusters, metrics.coviewed_impressions, metrics.historical_creative_quality_score, metrics.historical_landing_page_quality_score, metrics.historical_quality_score, metrics.historical_search_predicted_ctr, metrics.impressions_unique_query_clusters, metrics.primary_impressions, metrics.youtube_comments, metrics.youtube_likes, metrics.youtube_shares, segments.day_of_week, segments.interaction_on_this_extension, segments.mobile_device_platform, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt). Except: segments.loyalty_membership, segments.month, segments.month_of_year.

## segments.quarter

Field descriptionQuarter as represented by the date of the first day of a quarter.
Uses the calendar year for quarters, for example, the second quarter of
2018 starts on 2018-04-01. Formatted as yyyy-MM-dd.
Category`SEGMENT` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.day_of_week. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), metrics.biddable_app_install_conversions, metrics.biddable_app_post_install_conversions, metrics.biddable_cohort_app_post_install_conversions, metrics.clicks_unique_query_clusters, metrics.conversion_last_conversion_date, metrics.conversion_last_received_request_date_time, metrics.conversions_unique_query_clusters, metrics.historical_creative_quality_score, metrics.historical_landing_page_quality_score, metrics.historical_quality_score, metrics.historical_search_predicted_ctr, metrics.impressions_unique_query_clusters, metrics.youtube_comments, metrics.youtube_likes, metrics.youtube_shares, segments.day_of_week, segments.interaction_on_this_extension, segments.mobile_device_platform, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt). Except: metrics.svr, segments.adjusted_age_range, segments.adjusted_gender, segments.loyalty_membership, segments.quarter.

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

## metrics.all_conversions

Field descriptionThe total number of conversions. This includes all conversions regardless
of the value of include_in_conversions_metric.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [ad_group_ad](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad.md.txt), [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ad_group_asset](https://developers.google.com/google-ads/api/fields/v26/ad_group_asset.md.txt), [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [age_range_view](https://developers.google.com/google-ads/api/fields/v26/age_range_view.md.txt), [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [asset_field_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_field_type_view.md.txt), [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [asset_group_product_group_view](https://developers.google.com/google-ads/api/fields/v26/asset_group_product_group_view.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [asset_set_type_view](https://developers.google.com/google-ads/api/fields/v26/asset_set_type_view.md.txt), [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_asset](https://developers.google.com/google-ads/api/fields/v26/campaign_asset.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_budget](https://developers.google.com/google-ads/api/fields/v26/campaign_budget.md.txt), [campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_view.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [content_criterion_view](https://developers.google.com/google-ads/api/fields/v26/content_criterion_view.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [customer_asset](https://developers.google.com/google-ads/api/fields/v26/customer_asset.md.txt), [detail_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_placement_view.md.txt), [display_keyword_view](https://developers.google.com/google-ads/api/fields/v26/display_keyword_view.md.txt), [distance_view](https://developers.google.com/google-ads/api/fields/v26/distance_view.md.txt), [dynamic_search_ads_search_term_view](https://developers.google.com/google-ads/api/fields/v26/dynamic_search_ads_search_term_view.md.txt), [expanded_landing_page_view](https://developers.google.com/google-ads/api/fields/v26/expanded_landing_page_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [gender_view](https://developers.google.com/google-ads/api/fields/v26/gender_view.md.txt), [geographic_view](https://developers.google.com/google-ads/api/fields/v26/geographic_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt), [hotel_group_view](https://developers.google.com/google-ads/api/fields/v26/hotel_group_view.md.txt), [hotel_performance_view](https://developers.google.com/google-ads/api/fields/v26/hotel_performance_view.md.txt), [income_range_view](https://developers.google.com/google-ads/api/fields/v26/income_range_view.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt), [landing_page_view](https://developers.google.com/google-ads/api/fields/v26/landing_page_view.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), [managed_placement_view](https://developers.google.com/google-ads/api/fields/v26/managed_placement_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), [parental_status_view](https://developers.google.com/google-ads/api/fields/v26/parental_status_view.md.txt), [product_group_view](https://developers.google.com/google-ads/api/fields/v26/product_group_view.md.txt), [search_term_view](https://developers.google.com/google-ads/api/fields/v26/search_term_view.md.txt), [shopping_performance_view](https://developers.google.com/google-ads/api/fields/v26/shopping_performance_view.md.txt), [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [topic_view](https://developers.google.com/google-ads/api/fields/v26/topic_view.md.txt), [travel_activity_group_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_group_view.md.txt), [travel_activity_performance_view](https://developers.google.com/google-ads/api/fields/v26/travel_activity_performance_view.md.txt), [user_location_view](https://developers.google.com/google-ads/api/fields/v26/user_location_view.md.txt), [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt)

**Segments:** activity_account_id, activity_city, activity_country, activity_rating, activity_state, ad_destination_type, ad_format_type, ad_network_type, ad_sub_format_type, ad_sub_network_type, advance_booking_window, asset_interaction_target.asset, asset_interaction_target.interaction_on_this_asset, budget_campaign_association_status.campaign, budget_campaign_association_status.status, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, device, external_activity_id, external_conversion_source, geo_target_airport, geo_target_canton, geo_target_city, geo_target_country, geo_target_county, geo_target_district, geo_target_metro, geo_target_most_specific_location, geo_target_postal_code, geo_target_province, geo_target_region, geo_target_state, hotel_booking_window_days, hotel_center_id, hotel_check_in_date, hotel_check_in_day_of_week, hotel_city, hotel_class, hotel_country, hotel_date_selection_type, hotel_length_of_stay, hotel_price_bucket, hotel_rate_rule_id, hotel_rate_type, hotel_state, hour, keyword.ad_group_criterion, keyword.info.match_type, keyword.info.text, landing_page_source, length_of_booking, loyalty_membership, match_type, mobile_device_platform, month, new_versus_returning_customers, partner_hotel_id, product_aggregator_id, product_brand, product_category_level1, product_category_level2, product_category_level3, product_category_level4, product_category_level5, product_channel, product_channel_exclusivity, product_condition, product_country, product_custom_attribute0, product_custom_attribute1, product_custom_attribute2, product_custom_attribute3, product_custom_attribute4, product_feed_label, product_item_id, product_language, product_merchant_id, product_store_id, product_title, product_type_l1, product_type_l2, product_type_l3, product_type_l4, product_type_l5, quarter, search_term_match_source, search_term_match_type, slot, start_date, start_day_of_week, travel_destination_city, travel_destination_country, travel_destination_region, user_set_dates, vertical_ads_event_participant_display_names, vertical_ads_hotel_class, vertical_ads_listing, vertical_ads_listing_brand, vertical_ads_listing_city, vertical_ads_listing_country, vertical_ads_listing_region, vertical_ads_listing_user_rating, vertical_ads_listing_venue, vertical_ads_partner_account, vertical_ads_price_tier, vertical_ads_rate_rule_id, vertical_ads_rate_type, vertical_ads_vertical, webpage, week, year

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

## metrics.all_conversions_value

Field descriptionThe value of all conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: segments.conversion_value_rule_primary_dimension. Except: segments.slot.

## metrics.all_conversions_value_per_cost

Field descriptionThe value of all conversions divided by the total cost of ad interactions
(such as clicks for text ads or views for video ads).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions_from_interactions_value_per_interaction. Plus: [ad_group_ad_asset_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_view.md.txt), [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [group_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_placement_view.md.txt).

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

## metrics.clicks

Field descriptionThe number of clicks.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [click_view](https://developers.google.com/google-ads/api/fields/v26/click_view.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), segments.ad_group, segments.ad_using_product_data, segments.ad_using_video, segments.asset_group, segments.campaign, segments.interaction_on_this_extension, segments.month_of_year, segments.search_engine_results_page_type, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status, [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt). Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.new_versus_returning_customers.

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

## metrics.cost_micros

Field descriptionThe sum of your cost-per-click (CPC) and cost-per-thousand impressions
(CPM) costs during this period.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), segments.ad_using_product_data, segments.ad_using_video, segments.interaction_on_this_extension, segments.month_of_year, segments.search_term_targeting_status, [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt). Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.new_versus_returning_customers.

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

## metrics.cross_device_conversions

Field descriptionConversions from when a customer clicks on a Google Ads ad on one device,
then converts on a different device or browser.
Cross-device conversions are already included in `all_conversions`.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: segments.month_of_year. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.ad_destination_type, segments.hour, segments.loyalty_membership, segments.mobile_device_platform, segments.new_versus_returning_customers, segments.slot, segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region.

## metrics.cross_device_conversions_value

Field descriptionThe sum of the value of cross-device conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [asset_group_asset](https://developers.google.com/google-ads/api/fields/v26/asset_group_asset.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt)

## metrics.ctr

Field descriptionThe number of clicks your ad receives (Clicks) divided by the number
of times your ad is shown (Impressions).
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), segments.ad_group, segments.asset_group, segments.campaign, segments.interaction_on_this_extension, segments.month_of_year, segments.search_engine_results_page_type, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status. Except: [ai_max_search_term_ad_combination_view](https://developers.google.com/google-ads/api/fields/v26/ai_max_search_term_ad_combination_view.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.ad_destination_type, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.mobile_device_platform, segments.new_versus_returning_customers.

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

## metrics.impressions

Field descriptionThe number of times your ad has appeared on a search results page or
website on the Google Network.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [ad_group_ad_asset_combination_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_combination_view.md.txt), [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [detail_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_content_suitability_placement_view.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), [group_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_content_suitability_placement_view.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), [performance_max_placement_view](https://developers.google.com/google-ads/api/fields/v26/performance_max_placement_view.md.txt), segments.ad_group, segments.ad_using_product_data, segments.ad_using_video, segments.asset_group, segments.campaign, segments.interaction_on_this_extension, segments.month_of_year, segments.search_engine_results_page_type, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status, [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt). Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.ad_destination_type, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.mobile_device_platform, segments.new_versus_returning_customers.

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

## metrics.value_per_all_conversions

Field descriptionThe value of all conversions divided by the number of all conversions.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.ad_destination_type, segments.mobile_device_platform, segments.slot.

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
