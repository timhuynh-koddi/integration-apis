# Keyword View

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Queried with GAQL (`FROM keyword_view`) through `GoogleAdsService.Search`/`SearchStream`; there are no dedicated REST methods. Field reference page: https://developers.google.com/google-ads/api/fields/v26/keyword_view

---

## Schemas

### `KeywordView`

A keyword view.

| Field | Type | Description |
|---|---|---|
| resourceName | string | Output only. The resource name of the keyword view. Keyword view resource names have the form: `customers/{customer_id}/keywordViews/{ad_group_id}~{criterion_id}` |

---

## Field reference (verbatim from the Google field reference page)

[Help me build a query](https://developers.google.com/google-ads/api/fields/v26/keyword_view_query_builder.md.txt) [Proto definition ![on GitHub](https://developers.google.com/site-assets/logo-github.svg)](https://github.com/googleapis/googleapis/blob/master/google/ads/googleads/v26/resources/keyword_view.proto)

A keyword view.

| Attributed resources |
|---|
| [accessible_bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/accessible_bidding_strategy.md.txt) |
| [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt) |
| [ad_group_criterion](https://developers.google.com/google-ads/api/fields/v26/ad_group_criterion.md.txt) |
| [bidding_strategy](https://developers.google.com/google-ads/api/fields/v26/bidding_strategy.md.txt) |
| [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt) |
| [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt) |

Fields from the preceding resources can be selected along with this
resource in your `SELECT` and `WHERE` clauses. These fields do **not** segment
metrics in your `SELECT` clause.

#### Fields, segments, and metrics

This page shows all metrics and segments that can be put in the same `SELECT` clause as the fields of `keyword_view`.
However, when you specify `keyword_view` in the `FROM` clause, some metrics and segments
cannot be used.
Use the following filter to show only the fields that can be used when `keyword_view` is specified in the `FROM` clause.

Is `keyword_view` specified in the `FROM` clause of your query?
No Yes, it is

| Resource fields |
|---|
| resource_name |

| Segments |
|---|
| ad_network_type |
| ad_sub_network_type |
| auction_insight_domain |
| click_type |
| conversion_action |
| conversion_action_category |
| conversion_action_name |
| conversion_adjustment |
| conversion_attribution_event_type |
| conversion_lag_bucket |
| conversion_or_adjustment_lag_bucket |
| date |
| day_of_week |
| device |
| external_conversion_source |
| match_type |
| month |
| month_of_year |
| new_versus_returning_customers |
| quarter |
| slot |
| week |
| year |

| Metrics |
|---|
| absolute_top_impression_percentage |
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
| all_conversions_from_interactions_rate |
| all_conversions_from_interactions_value_per_interaction |
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
| bounce_rate |
| clicks |
| conversions |
| conversions_by_conversion_date |
| conversions_from_interactions_rate |
| conversions_value |
| conversions_value_by_conversion_date |
| conversions_value_per_cost |
| cost_micros |
| cost_of_goods_sold_micros |
| cost_per_all_conversions |
| cost_per_conversion |
| cost_per_current_model_attributed_conversion |
| cross_device_conversions |
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
| engagement_rate |
| engagements |
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
| interaction_event_types |
| interaction_rate |
| interactions |
| lead_cost_of_goods_sold_micros |
| lead_gross_profit_micros |
| lead_revenue_micros |
| lead_units_sold |
| orders |
| percent_new_visitors |
| phone_calls |
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
| top_impression_percentage |
| trueview_average_cpv |
| units_sold |
| value_per_all_conversions |
| value_per_all_conversions_by_conversion_date |
| value_per_conversion |
| value_per_conversions_by_conversion_date |
| value_per_current_model_attributed_conversion |
| video_quartile_p100_rate |
| video_quartile_p25_rate |
| video_quartile_p50_rate |
| video_quartile_p75_rate |
| video_trueview_view_rate |
| video_trueview_views |
| view_through_conversions |

## keyword_view.resource_name

Field descriptionOutput only. The resource name of the keyword view.
Keyword view resource names have the form:

`customers/{customer_id}/keywordViews/{ad_group_id}~{criterion_id}`
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt)

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

## segments.match_type

Field descriptionThe match type of the keyword that triggered the ad. This segment is for
use with keyword_view. For other resources, use search_term_match_type.
While match_type is filtered to Broad, Exact, Phrase and Ai Max,
search_term_match_type includes variants like Near Exact, Near Phrase.
Category`SEGMENT` Data Type`ENUM`
`AI_MAX``BROAD``EXACT``PHRASE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.MatchTypeEnum.MatchType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt)

**Segments:** ad_network_type, ad_sub_network_type, click_type, conversion_action, conversion_action_category, conversion_action_name, conversion_adjustment, conversion_attribution_event_type, conversion_lag_bucket, conversion_or_adjustment_lag_bucket, date, day_of_week, device, external_conversion_source, month, new_versus_returning_customers, quarter, slot, week, year

**Metrics:** absolute_top_impression_percentage, all_conversions, all_conversions_by_conversion_date, all_conversions_from_interactions_rate, all_conversions_from_interactions_value_per_interaction, all_conversions_value, all_conversions_value_by_conversion_date, all_conversions_value_per_cost, average_cost, average_cpc, average_cpe, average_cpm, clicks, conversions, conversions_by_conversion_date, conversions_from_interactions_rate, conversions_value, conversions_value_by_conversion_date, conversions_value_per_cost, cost_micros, cost_per_all_conversions, cost_per_conversion, cross_device_conversions, cross_device_conversions_value_micros, ctr, engagement_rate, engagements, impressions, interaction_event_types, interaction_rate, interactions, phone_calls, search_absolute_top_impression_share, search_budget_lost_absolute_top_impression_share, search_budget_lost_impression_share, search_budget_lost_top_impression_share, search_impression_share, search_rank_lost_absolute_top_impression_share, search_rank_lost_impression_share, search_rank_lost_top_impression_share, search_top_impression_share, top_impression_percentage, trueview_average_cpv, value_per_all_conversions, value_per_all_conversions_by_conversion_date, value_per_conversion, value_per_conversions_by_conversion_date, video_quartile_p100_rate, video_quartile_p25_rate, video_quartile_p50_rate, video_quartile_p75_rate, video_trueview_view_rate, video_trueview_views, view_through_conversions

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

## segments.quarter

Field descriptionQuarter as represented by the date of the first day of a quarter.
Uses the calendar year for quarters, for example, the second quarter of
2018 starts on 2018-04-01. Formatted as yyyy-MM-dd.
Category`SEGMENT` Data Type`DATE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as segments.day_of_week. Plus: [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [location_interest_view](https://developers.google.com/google-ads/api/fields/v26/location_interest_view.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt), metrics.biddable_app_install_conversions, metrics.biddable_app_post_install_conversions, metrics.biddable_cohort_app_post_install_conversions, metrics.clicks_unique_query_clusters, metrics.conversion_last_conversion_date, metrics.conversion_last_received_request_date_time, metrics.conversions_unique_query_clusters, metrics.historical_creative_quality_score, metrics.historical_landing_page_quality_score, metrics.historical_quality_score, metrics.historical_search_predicted_ctr, metrics.impressions_unique_query_clusters, metrics.youtube_comments, metrics.youtube_likes, metrics.youtube_shares, segments.day_of_week, segments.interaction_on_this_extension, segments.mobile_device_platform, [shopping_product](https://developers.google.com/google-ads/api/fields/v26/shopping_product.md.txt), [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt). Except: metrics.svr, segments.adjusted_age_range, segments.adjusted_gender, segments.loyalty_membership, segments.quarter.

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

**Resources:** [ad_group](https://developers.google.com/google-ads/api/fields/v26/ad_group.md.txt), [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt), [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt), [keyword_view](https://developers.google.com/google-ads/api/fields/v26/keyword_view.md.txt)

**Segments:** auction_insight_domain, date, day_of_week, device, month, quarter, week, year

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

Same as metrics.auction_insight_search_absolute_top_impression_percentage.

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

Same as metrics.auction_insight_search_absolute_top_impression_percentage.

## metrics.auction_insight_search_overlap_rate

Field descriptionThis metric is part of the Auction Insights report, and tells the
percentage of times another participant's ad received an impression when
your ad also received an impression.

This metric is not publicly available.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.auction_insight_search_absolute_top_impression_percentage.

## metrics.auction_insight_search_position_above_rate

Field descriptionThis metric is part of the Auction Insights report, and tells the
percentage of times another participant's ad was shown in a higher position
than yours, when both of your ads were shown at the same page.

This metric is not publicly available.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.auction_insight_search_absolute_top_impression_percentage.

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

Same as metrics.auction_insight_search_absolute_top_impression_percentage.

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

## metrics.cross_device_conversions

Field descriptionConversions from when a customer clicks on a Google Ads ad on one device,
then converts on a different device or browser.
Cross-device conversions are already included in `all_conversions`.
Category`METRIC` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: segments.month_of_year. Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.ad_destination_type, segments.hour, segments.loyalty_membership, segments.mobile_device_platform, segments.new_versus_returning_customers, segments.slot, segments.travel_destination_city, segments.travel_destination_country, segments.travel_destination_region.

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

Same as metrics.average_page_views. Plus: segments.click_type, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.device, segments.external_conversion_source, segments.new_versus_returning_customers, [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt). Except: segments.month_of_year.

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

Same as metrics.average_page_views. Plus: segments.click_type, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.device, segments.external_conversion_source, segments.new_versus_returning_customers, [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt). Except: segments.month_of_year.

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

Same as metrics.auction_insight_search_absolute_top_impression_percentage. Plus: segments.month_of_year. Except: segments.auction_insight_domain, segments.day_of_week, segments.device.

## metrics.historical_landing_page_quality_score

Field descriptionThe quality of historical landing page experience.
Category`METRIC` Data Type`ENUM`
`ABOVE_AVERAGE``AVERAGE``BELOW_AVERAGE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.QualityScoreBucketEnum.QualityScoreBucket` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.auction_insight_search_absolute_top_impression_percentage. Plus: segments.month_of_year. Except: segments.auction_insight_domain, segments.day_of_week, segments.device.

## metrics.historical_quality_score

Field descriptionThe historical quality score.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.auction_insight_search_absolute_top_impression_percentage. Plus: segments.month_of_year. Except: segments.auction_insight_domain, segments.day_of_week, segments.device.

## metrics.historical_search_predicted_ctr

Field descriptionThe historical search predicted clickthrough rate (CTR).
Category`METRIC` Data Type`ENUM`
`ABOVE_AVERAGE``AVERAGE``BELOW_AVERAGE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.QualityScoreBucketEnum.QualityScoreBucket` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.auction_insight_search_absolute_top_impression_percentage. Plus: segments.month_of_year. Except: segments.auction_insight_domain, segments.day_of_week, segments.device.

## metrics.impressions

Field descriptionThe number of times your ad has appeared on a search results page or
website on the Google Network.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.all_conversions. Plus: [ad_group_ad_asset_combination_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_ad_asset_combination_view.md.txt), [campaign_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/campaign_search_term_insight.md.txt), [customer_search_term_insight](https://developers.google.com/google-ads/api/fields/v26/customer_search_term_insight.md.txt), [detail_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/detail_content_suitability_placement_view.md.txt), [experiment](https://developers.google.com/google-ads/api/fields/v26/experiment.md.txt), [group_content_suitability_placement_view](https://developers.google.com/google-ads/api/fields/v26/group_content_suitability_placement_view.md.txt), [paid_organic_search_term_view](https://developers.google.com/google-ads/api/fields/v26/paid_organic_search_term_view.md.txt), [performance_max_placement_view](https://developers.google.com/google-ads/api/fields/v26/performance_max_placement_view.md.txt), segments.ad_group, segments.ad_using_product_data, segments.ad_using_video, segments.asset_group, segments.campaign, segments.interaction_on_this_extension, segments.month_of_year, segments.search_engine_results_page_type, segments.search_subcategory, segments.search_term, segments.search_term_targeting_status, [smart_campaign_search_term_view](https://developers.google.com/google-ads/api/fields/v26/smart_campaign_search_term_view.md.txt). Except: [conversion_action](https://developers.google.com/google-ads/api/fields/v26/conversion_action.md.txt), segments.ad_destination_type, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.external_conversion_source, segments.mobile_device_platform, segments.new_versus_returning_customers.

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

Same as metrics.auction_insight_search_absolute_top_impression_percentage. Plus: segments.ad_network_type, segments.ad_sub_network_type, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt). Except: segments.auction_insight_domain.

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

Same as metrics.average_page_views. Plus: segments.click_type, segments.conversion_action, segments.conversion_action_category, segments.conversion_action_name, segments.conversion_adjustment, segments.conversion_attribution_event_type, segments.conversion_lag_bucket, segments.conversion_or_adjustment_lag_bucket, segments.device, segments.external_conversion_source, segments.new_versus_returning_customers, [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt). Except: segments.month_of_year.

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

## metrics.video_trueview_views

Field descriptionThe number of TrueView views your video ads received.
Category`METRIC` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as metrics.average_cost. Plus: segments.ad_format_type, segments.ad_sub_format_type, segments.asset_interaction_target.asset, segments.asset_interaction_target.interaction_on_this_asset, [video](https://developers.google.com/google-ads/api/fields/v26/video.md.txt), [video_enhancement](https://developers.google.com/google-ads/api/fields/v26/video_enhancement.md.txt). Except: [asset_group](https://developers.google.com/google-ads/api/fields/v26/asset_group.md.txt), [asset_set_asset](https://developers.google.com/google-ads/api/fields/v26/asset_set_asset.md.txt), [campaign_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/campaign_aggregate_asset_view.md.txt), [campaign_group](https://developers.google.com/google-ads/api/fields/v26/campaign_group.md.txt), [channel_aggregate_asset_view](https://developers.google.com/google-ads/api/fields/v26/channel_aggregate_asset_view.md.txt), [final_url_expansion_asset_view](https://developers.google.com/google-ads/api/fields/v26/final_url_expansion_asset_view.md.txt), [matched_location_interest_view](https://developers.google.com/google-ads/api/fields/v26/matched_location_interest_view.md.txt), segments.click_type, segments.month_of_year, segments.slot, [targeting_expansion_view](https://developers.google.com/google-ads/api/fields/v26/targeting_expansion_view.md.txt), [webpage_view](https://developers.google.com/google-ads/api/fields/v26/webpage_view.md.txt).

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
