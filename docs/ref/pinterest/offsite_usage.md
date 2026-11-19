# koddi-offsite Pinterest calls → Pinterest API v5 docs

> Offsite calls the Pinterest REST API v5 directly (`app/adapter/service/pinterest/*.go`, base `https://api.pinterest.com/v5`).
> Checked 2026-11-19 against the v5.32.0 OpenAPI spec. Each row is a call offsite makes; "Doc" is the file in this folder.

| Offsite call | Spec operation | Doc |
|---|---|---|
| POST/GET/PATCH `/ad_accounts/{id}/campaigns`, GET `.../campaigns/{id}` | `campaigns/create`, `list`, `update`, `get` | [campaigns.md](campaigns.md) |
| POST/GET/PATCH `/ad_accounts/{id}/ad_groups`, GET `.../ad_groups/{id}` | `ad_groups/create`, `list`, `update`, `get` | [ad_groups.md](ad_groups.md) |
| POST/PATCH `/ad_accounts/{id}/ads` | `ads/create`, `ads/update` | [ads.md](ads.md) |
| POST `/pins`, GET/PATCH `/pins/{id}` | `pins/create`, `get`, `update` | [pins.md](pins.md) |
| POST `/media`, GET `/media/{id}` | `media/create`, `media/get` | [media.md](media.md) |
| POST/PATCH/GET `/ad_accounts/{id}/keywords` | `keywords/create`, `update`, `get` | [keywords.md](keywords.md) |
| GET `/ad_accounts/{id}/audiences` | `audiences/list` | [audiences.md](audiences.md) |
| GET `/ad_accounts/{id}/customer_lists` | `customer_lists/list` | [customer_lists.md](customer_lists.md) |
| POST/GET `/ad_accounts/{id}/conversion_tags`, GET `.../{id}`, `.../ocpm_eligible`, `.../page_visit` | `conversion_tags/*` | [conversion_tags.md](conversion_tags.md) |
| POST `/ad_accounts/{id}/events` | `events/create` | [conversion_events.md](conversion_events.md) |
| GET `/catalogs` | `catalogs/list` | [catalogs.md](catalogs.md) |
| POST/GET `/catalogs/product_groups`, GET/PATCH `.../{id}` | `catalogs_product_groups/*` | [catalog_product_groups.md](catalog_product_groups.md) |
| POST/GET `/catalogs/reports` | `reports/create`, `reports/get` (catalog reports) | [catalog_reports.md](catalog_reports.md) |
| POST/PATCH/GET `/ad_accounts/{id}/product_group_promotions` | `product_group_promotions/*` | [product_group_promotions.md](product_group_promotions.md) |
| GET `/ad_accounts/{id}/analytics`, POST/GET `/ad_accounts/{id}/reports` | `ad_account/analytics`, `analytics/create_report`, `analytics/get_report` | [ad_accounts.md](ad_accounts.md) (only these 3 of the tag's 14 operations) |
| GET `/resources/targeting/{type}` (INTEREST, GEO, other types) | `targeting_options/get` | [resources.md](resources.md) |

## Calls with no matching documented endpoint

These three offsite calls do not match any path in the v5.32.0 spec. Not verified whether the API still accepts them.

| Offsite call (file) | Closest documented endpoint |
|---|---|
| GET `/v5/audiences/{audience_id}` (`audiences.go`) | GET `/ad_accounts/{ad_account_id}/audiences/{audience_id}` (`audiences/get`) in [audiences.md](audiences.md) |
| GET `/v5/ads/{ad_id}?ad_account_id=` (`creative.go` `GetAd`) | GET `/ad_accounts/{ad_account_id}/ads/{ad_id}` (`ads/get`) in [ads.md](ads.md) |
| PATCH `/v5/ads/{ad_id}` (`creative.go` `UpdateAd`) | PATCH `/ad_accounts/{ad_account_id}/ads` (`ads/update`, body is an array), which offsite already uses elsewhere |
