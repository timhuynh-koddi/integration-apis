# koddi-offsite GAM usage → Ad Manager API (beta, REST v1)

> Offsite calls the legacy **SOAP** Ad Manager API through the internal `KoddiDev/go-gam` client (`go-gam v0.202511.1`;
> adapter: `app/adapter/service/google_ads_manager/wrapper.go`, callers in `app/integrations/gam/service/*.go`).
> This file maps every SOAP call offsite makes to the beta REST method that documents the equivalent operation.
> Generated 2026-11-19 from the REST v1 Discovery document (revision 20261118). Mapping is by operation name and
> description; field-level parity is **unverified** unless noted.

Base URL: `https://admanager.googleapis.com/v1/` · Parent for most calls: `networks/{networkCode}`

## SOAP call → REST method

| SOAP service.method (offsite) | REST method | Doc file |
|---|---|---|
| `NetworkService.getCurrentNetwork` | `GET v1/networks/{networkCode}` (`networks.get`), or `GET v1/networks` (`networks.list`: networks the current user can access) | [networks.md](networks.md) |
| `UserService.getCurrentUser` | `GET v1/networks/{networkCode}/users/me` (`networks.users.get`; the API description states `users/me` returns the current user) | [users.md](users.md) |
| `CompanyService.getCompaniesByStatement` | `networks.companies.list` (`filter`, `orderBy`, `pageSize`, `pageToken`) | [companies.md](companies.md) |
| `CompanyService.createCompanies` | `networks.companies.create` / `batchCreate` | [companies.md](companies.md) |
| `OrderService.getOrdersByStatement` | `networks.orders.list` | [orders.md](orders.md) |
| `OrderService.createOrders` | `networks.orders.create` / `batchCreate` | [orders.md](orders.md) |
| `OrderService.updateOrders` | `networks.orders.patch` / `batchUpdate` | [orders.md](orders.md) |
| `OrderService.performOrderAction` → `PauseOrders` | `POST v1/{parent}/orders:batchPause` (`networks.orders.batchPause`) | [orders.md](orders.md) |
| `OrderService.performOrderAction` → `ResumeOrders` | `POST v1/{parent}/orders:batchResume` (`networks.orders.batchResume`) | [orders.md](orders.md) |
| `LineItemService.getLineItemsByStatement` | `networks.lineItems.list` | [line_items.md](line_items.md) |
| `LineItemService.createLineItems` | `networks.lineItems.create` / `batchCreate` | [line_items.md](line_items.md) |
| `LineItemService.updateLineItems` | `networks.lineItems.patch` / `batchUpdate` | [line_items.md](line_items.md) |
| `LineItemService.performLineItemAction` → `PauseLineItems` | `POST v1/{parent}/lineItems:batchPause` | [line_items.md](line_items.md) |
| `LineItemService.performLineItemAction` → `ResumeLineItems` | `POST v1/{parent}/lineItems:batchResume` | [line_items.md](line_items.md) |
| `CreativeService.getCreativesByStatement` | `networks.creatives.list` | [creatives.md](creatives.md) |
| `CreativeService.createCreatives` | `networks.creatives.create` / `batchCreate` | [creatives.md](creatives.md) |
| `CreativeService.updateCreatives` | `networks.creatives.patch` / `batchUpdate` | [creatives.md](creatives.md) |
| `LineItemCreativeAssociationService.createLineItemCreativeAssociations` | `networks.lineItems.creatives.create` / `batchCreate` | [line_item_creatives.md](line_item_creatives.md) |
| `LineItemCreativeAssociationService.performLineItemCreativeAssociationAction` → `DeleteLineItemCreativeAssociations` | `POST v1/{parent}/creatives:batchDelete` (`networks.lineItems.creatives.batchDelete`, request `BatchDeleteLineItemCreativeAssociationsRequest`) | [line_item_creatives.md](line_item_creatives.md) |
| `AudienceSegmentService.getAudienceSegmentsByStatement` | `networks.audienceSegments.list` | [audience_segments.md](audience_segments.md) |
| `MobileApplicationService.getMobileApplicationsByStatement` | `networks.applications.list` | [applications.md](applications.md) |
| `CustomTargetingService.getCustomTargetingKeysByStatement` | `networks.customTargetingKeys.list` | [custom_targeting_keys.md](custom_targeting_keys.md) |
| `CustomTargetingService.getCustomTargetingValuesByStatement` | `networks.customTargetingValues.list` (filter by key), or `networks.customTargetingKeys.customTargetingValues.list` | [custom_targeting_values.md](custom_targeting_values.md), [custom_targeting_key_values.md](custom_targeting_key_values.md) |
| `InventoryService.getAdUnitsByStatement` and PQL `SELECT Id, Name FROM Ad_Unit` | `networks.adUnits.list` | [ad_units.md](ad_units.md) |
| PQL `SELECT Id, Name FROM Geo_Target WHERE Targetable = true` | `networks.geoTargets.list` (`filter`) | [geo_targets.md](geo_targets.md) |
| PQL `SELECT Id, DeviceCategoryName FROM Device_Category` | `networks.deviceCategories.list` | [device_categories.md](device_categories.md) |
| `ReportService.runReportJob` | `POST v1/{parent}/reports` (`networks.reports.create`) then `POST v1/{name}:run` (`networks.reports.run`, returns a long-running `Operation`) | [reports.md](reports.md) |
| `ReportService.getReportJobStatus` | `GET v1/{name}` on the run operation (`networks.operations.reports.runs.get`); the API says to poll every 5 s initially with exponential backoff | [report_runs.md](report_runs.md) |
| `ReportService.getReportDownloadUrlWithOptions` (`ExportFormat CSV_DUMP`) | `GET v1/{name}:fetchRows` (`networks.reports.results.fetchRows`, paged rows with `pageSize`/`pageToken`). No download-URL or CSV export method was found in the discovery doc (unverified beyond that). | [report_results.md](report_results.md) |

## Report query mapping (`app/integrations/gam/service/report.go`)

| SOAP `ReportQuery` value | REST `ReportDefinition` equivalent | Status |
|---|---|---|
| Dimensions `ADVERTISER_ID`, `ORDER_ID`, `LINE_ITEM_ID`, `CITY_NAME`, `HOUR` | same names in `ReportDefinition.Field.dimension` enum | present |
| Dimension `DAY` | `DATE` | renamed |
| Columns `AD_SERVER_IMPRESSIONS`, `AD_SERVER_CLICKS` | same names in `Field.metric` enum | present |
| Column `AD_EXCHANGE_COST_PER_CLICK` | `AD_EXCHANGE_CPC` (name-based match only; semantics unverified) | renamed? |
| `DateRangeType CUSTOM_DATE` | `ReportDefinition.dateRange.fixed` | different shape |
| Report type (implicit historical) | `ReportDefinition.reportType` = `HISTORICAL` | explicit |

## Query language differences

- SOAP `Statement` / PQL `WHERE ... LIMIT ... OFFSET` strings become `list` calls with `filter`, `orderBy`, `pageSize` and `pageToken`
  query parameters. REST list methods also take `skip`. Filter syntax parity with PQL is **unverified**.
- SOAP IDs are numeric (`orderId`, `lineItemId`); REST uses resource names (`networks/{code}/orders/{id}`).
- Batch actions (`batchPause`, `batchResume`, `batchDelete`) replace `perform*Action` with a `Statement`.
