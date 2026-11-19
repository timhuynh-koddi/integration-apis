# Third Party Data Taxonomy

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 4

---

## POST /v3/thirdpartydata

Create a new data element (segment) in your third-party data taxonomy and set whether customers can buy it through the Data Management Platform (DMP). For details and examples, see [Third-Party Data Integration](/v3/portal/data/doc/DataThirdPartyIntegrationAudience).  
This endpoint is available only to data providers. For more information, contact your Technical Account Manager.

Operation ID: `post-thirdpartydata`

**Request body** (`application/json`, required): `DMP_ThirdPartyDataTaxonomy_post`

**Response 200** (`application/json`): `DMP_ThirdPartyDataTaxonomy`

---

## PUT /v3/thirdpartydata

Update the name, description, or buyable status for a data element in your third-party data taxonomy in the Data Management Platform (DMP).  
This endpoint is available only to data providers. For more information, contact your Technical Account Manager.

Operation ID: `put-thirdpartydata`

**Request body** (`application/json`, required): `DMP_ThirdPartyDataTaxonomy_put`

**Response 200** (`application/json`): `DMP_ThirdPartyDataTaxonomy`

---

## POST /v3/thirdpartydata/query

Retrieve a paged, filterable list of data elements for a specific data provider.  
   
This endpoint is available only to data providers. For more information, contact your Technical Account Manager.

Operation ID: `post-thirdpartydata-query`

**Request body** (`application/json`, required): `DMP_ThirdPartyDataTaxonomyQuery_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ThirdPartyDataTaxonomy_`

---

## GET /v3/thirdpartydata/status/{providerId}/{providerElementId}

Retrieve the approval status of third-party taxonomy data changes for the specified element. For a list of possible statuses, see [Check Data Change Status](/v3/portal/data/doc/ThirdPartyDataManagement#check-status).  
**NOTE**: This endpoint is available only to third-party data providers.

Operation ID: `get-thirdpartydata-status-providerid-providerelementid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| providerId | path | string | yes | The unique ID for your provider account, which your Account Manager provided to you. |
| providerElementId | path | string | yes | The unique ID assigned to the segment when the taxonomy [was designed](/v3/portal/data/doc/DataTaxonomyDesign).   **IMPORTANT**: This ID is the same as the `Name` field value in the [POST /data/thirdparty](/v3/portal/data/doc/post-data-thirdparty) Data API endpoint when data was sent. These two fields establish a link for the segment between the two API suites.  For details, see [Third-Party Data Integration](/v3/portal/data/doc/DataThirdPartyIntegrationAudience).   - This value is immutable after creation. Recommended approach: use a sequential numeric value or an alphanumeric identifier with a maximum of 256 characters.   - Do not include descriptive words or phrases (for example, brand names, product names, or audience groups). |

**Response 200** (`application/json`): `DMP_ThirdPartyDataTaxonomyApprovalStatus`

---

## Schemas

### `DMP_ThirdPartyDataTaxonomy`

A Third Party Data element - part of the provider's taxonomy

| Field | Type | Required | Description |
|---|---|---|---|
| ActiveIDsCount | integer (int64) |  | The number of devices and browsers within this targeting data based on the active ID counting methodology.   After the taxonomy is created, it will take some time to generate counts, which means that a 0 value does not necessarily mean that the counts are 0. Please check back at a later time.   For details on the counting methodology, see [Audience](/v3/portal/api/doc/Audience).   This property value is system-generated and read-only. |
| ActiveIDsCountExpanded | boolean |  | Indicates whether cross-device has been used to expand the active IDs count. Segments with UID2s show expanded reach through cross-device.    For details on the counting methodology, see [Audience](/v3/portal/api/doc/Audience).    This property is system-generated and read-only. _(nullable)_ |
| AudienceExpansion | `AudienceExpansion_SegmentAudienceExpansion` |  | An optional audience expansion configuration for this segment. _(nullable)_ |
| Buyable | boolean |  | If set to `true`, indicates that the segment is visible and available for buyers in the DMP. For details, see [Audience Data Segments and Rates](/v3/portal/data/doc/ThirdPartyDataManagement).   **IMPORTANT**: Always set this value to `true`, unless you are implementing a [legacy taxonomy](/v3/portal/data/doc/DataLegacyTaxonomy) with container elements. |
| Description | string |  | An optional description of the data segment, displayed to customers in the DMP. While the limit is 4000 characters, to ensure readability, consider using a maximum of 256 characters. _(nullable)_ |
| DisplayName | string |  | The full path for the segment that determines the relationships between the segments in the taxonomy. For details, see [Third-Party Data Taxonomy Design](/v3/portal/data/doc/DataTaxonomyDesign).   - The following special characters are allowed: comma `,` colon `:` hyphen `-` underscore `_` ampersand &amp; apostrophe `'` forward slash `/` backslash `\` pipe `\|` plus `+` greater than sign &gt; less than sign &lt; equal sign `=` asterisk `*` parentheses `()` period `.` question mark `?`   - Do not include tabs or other special characters such as quotation mark `"` or caret `^`.   - This value is immutable when the data segment has a taxonomy compliance status of `Denied` or `Pending`.   - In the DMP, only the end of the branch in the segment hierarchy (the text that follows the last greater than sign) is displayed as the segment name. For example, a segment with the full path *Interest &gt; Technology &gt; Computers* appears as *Computers*.   - To increase relevance and help advertisers better understand your segments, use clear and descriptive names. Do not use random letters or numbers, or generic labels like `PROVIDER_NAME` or `Custom Segment 1234`. For details, see [Segment Naming Guidelines](/v3/portal/data/doc/ThirdPartyDataManagement#naming-guidelines). _(maxLength 1024)_ |
| IsDirectIPTargeting | boolean |  | If set to `true`, the TargetingData used or created will be type 16 (DirectIpTargeting) instead of type 7 (ThirdPartyData), which is the default value. |
| LastUpdatedAtUTC | string (date-time) |  | Indicates the time when the received counts of this targeting data was last updated (in UTC).   Counts are updated more than once a day.   This is a read-only property returned by the API. _(nullable)_ |
| ParentElementId | string |  | The ID of the topmost parent segment of the taxonomy.   - For syndicated taxonomies, set this value to `ROOT`.   - For custom taxonomies, set this value to `CUSTOM`.   - Immutable after creation.   For details, see [Third-Party Data Taxonomy Design](/v3/portal/data/doc/DataTaxonomyDesign).   **NOTE**: If you are implementing a legacy taxonomy, where this property defines the hierarchical parent-child relations, this must be the `ProviderElementId` value from the parent segment in the taxonomy. For details, see [Third-Party Data Legacy Taxonomy Design](/v3/portal/data/doc/DataLegacyTaxonomy). _(maxLength 512)_ |
| ProviderElementId | string |  | The unique ID assigned to the segment when the taxonomy [was designed](/v3/portal/data/doc/DataTaxonomyDesign).    - This ID is used to identify a data segment that you uploaded.   - This value was used in the `Name` field in the [POST /data/thirdparty](/v3/portal/data/doc/post-data-thirdparty) endpoint when data was sent, which links the segment between the two API suites.   - This value is immutable after creation. Recommended approach: use a sequential numeric value or an alphanumeric identifier with a maximum of 256 characters.   - Do not include descriptive words or phrases (for example, brand names, product names, or audience groups). _(maxLength 512)_ |
| ProviderId | string |  | The unique ID that your Technical Account Manager provided to you at the [initial setup](/v3/portal/data/doc/DataGetStarted3pProviderAudience) during the onboarding process. _(maxLength 32)_ |
| ReceivedIDsCount | integer (int64) |  | The total number of IDs within this targeting data. From a targeting perspective, all IDs within the segment are targetable/excludable.   After the taxonomy is created, it will take some time to generate counts, which means that a 0 value does not necessarily mean that the counts are 0. Please check back at a later time. |
| SubProviderId | string |  | The ID of the third-party data sub-provider that owns the segment. _(nullable)_ |
| TaxonomyComplianceStatus | `DMP_ThirdPartyDataTaxonomyApprovalStatus` |  | The approval status for the [creation](/v3/portal/data/doc/ThirdPartyDataManagement#create-data-elements) of a third-party data segment. The following is the statuses and their descriptions:   - `NotInQueue`: The taxonomy changes have not been queued for processing yet.   - `Pending`: The taxonomy changes have been processed and are pending approval.   - `Approved`: The taxonomy changes have been approved.   - `Denied`: The taxonomy changes have been processed but denied approval. Segments with this status cannot be used in the DMP.   If approval status is `Denied`, the issue may be that the taxonomy includes sensitive categories. For details, see [Check Data Change Status](/v3/portal/data/doc/ThirdPartyDataManagement#check-status). |
| ThirdPartyDataBrandId | string |  | Optional brand assigned when this segment is created. The brand must belong to the same   provider and sub-provider as the segment. All rates for this segment must use this brand.   Ancestor rates for other brands do not propagate to this segment. Other descendants   can still inherit rates that match their own brand, or any brand if they are unbound.   On update, omit this property or supply the   existing brand ID; assigning, changing, or clearing a brand is not supported. _(maxLength 32)_ |
| ThirdPartyDataId | integer (int64) |  | The unique ID for the third-party data segment. This ID is used for retargeting purposes, for example, when adding segments to audiences. |
| AudienceSize | integer (int64) |  | An optional audience size for this segment. _(nullable; DEPRECATED; deprecation: This property is no longer actively used in our system. For new integrations, set the value to 0.)_ |

### `DMP_ThirdPartyDataTaxonomyApprovalStatus`

Type: string enum(NotInQueue, Pending, Approved, Denied)

### `DMP_ThirdPartyDataTaxonomyQuery_post`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| ProviderId | string | yes | The unique ID for your provider account, which your Account Manager provided to you. |
| IncludeActiveIDsCountExpandedFlag | boolean |  | If set to `true`, the `ActiveIDsCountExpanded` property value is generated and included in the response. Otherwise, the `ActiveIDsCountExpanded` property value is `null`. The default value is `false`. |
| IncludeAudienceExpansionFlag | boolean |  | If set to `true`, the `AudienceExpansion` configuration is generated and included in each response item when available. Otherwise, the `AudienceExpansion` property value is `null`. The default value is `false`. |
| ProviderElementId | string |  | The unique ID that you set to identify this data element in the system. For details and examples, see [Third-Party Data Integration](/v3/portal/data/doc/DataThirdPartyIntegrationAudience). _(nullable)_ |

### `DMP_ThirdPartyDataTaxonomy_post`

A Third Party Data element - part of the provider's taxonomy

| Field | Type | Required | Description |
|---|---|---|---|
| Buyable | boolean | yes | If set to `true`, indicates that the segment is visible and available for buyers in the DMP. For details, see [Audience Data Segments and Rates](/v3/portal/data/doc/ThirdPartyDataManagement).   **IMPORTANT**: Always set this value to `true`, unless you are implementing a [legacy taxonomy](/v3/portal/data/doc/DataLegacyTaxonomy) with container elements. |
| DisplayName | string | yes | The full path for the segment that determines the relationships between the segments in the taxonomy. For details, see [Third-Party Data Taxonomy Design](/v3/portal/data/doc/DataTaxonomyDesign).   - The following special characters are allowed: comma `,` colon `:` hyphen `-` underscore `_` ampersand &amp; apostrophe `'` forward slash `/` backslash `\` pipe `\|` plus `+` greater than sign &gt; less than sign &lt; equal sign `=` asterisk `*` parentheses `()` period `.` question mark `?`   - Do not include tabs or other special characters such as quotation mark `"` or caret `^`.   - This value is immutable when the data segment has a taxonomy compliance status of `Denied` or `Pending`.   - In the DMP, only the end of the branch in the segment hierarchy (the text that follows the last greater than sign) is displayed as the segment name. For example, a segment with the full path *Interest &gt; Technology &gt; Computers* appears as *Computers*.   - To increase relevance and help advertisers better understand your segments, use clear and descriptive names. Do not use random letters or numbers, or generic labels like `PROVIDER_NAME` or `Custom Segment 1234`. For details, see [Segment Naming Guidelines](/v3/portal/data/doc/ThirdPartyDataManagement#naming-guidelines). _(maxLength 1024)_ |
| ParentElementId | string | yes | The ID of the topmost parent segment of the taxonomy.   - For syndicated taxonomies, set this value to `ROOT`.   - For custom taxonomies, set this value to `CUSTOM`.   - Immutable after creation.   For details, see [Third-Party Data Taxonomy Design](/v3/portal/data/doc/DataTaxonomyDesign).   **NOTE**: If you are implementing a legacy taxonomy, where this property defines the hierarchical parent-child relations, this must be the `ProviderElementId` value from the parent segment in the taxonomy. For details, see [Third-Party Data Legacy Taxonomy Design](/v3/portal/data/doc/DataLegacyTaxonomy). _(maxLength 512)_ |
| ProviderElementId | string | yes | The unique ID assigned to the segment when the taxonomy [was designed](/v3/portal/data/doc/DataTaxonomyDesign).    - This ID is used to identify a data segment that you uploaded.   - This value was used in the `Name` field in the [POST /data/thirdparty](/v3/portal/data/doc/post-data-thirdparty) endpoint when data was sent, which links the segment between the two API suites.   - This value is immutable after creation. Recommended approach: use a sequential numeric value or an alphanumeric identifier with a maximum of 256 characters.   - Do not include descriptive words or phrases (for example, brand names, product names, or audience groups). _(maxLength 512)_ |
| ProviderId | string | yes | The unique ID that your Technical Account Manager provided to you at the [initial setup](/v3/portal/data/doc/DataGetStarted3pProviderAudience) during the onboarding process. _(maxLength 32)_ |
| AudienceExpansion | `AudienceExpansion_SegmentAudienceExpansion_post` |  | An optional audience expansion configuration for this segment. _(nullable)_ |
| Description | string |  | An optional description of the data segment, displayed to customers in the DMP. While the limit is 4000 characters, to ensure readability, consider using a maximum of 256 characters. _(nullable)_ |
| IsDirectIPTargeting | boolean |  | If set to `true`, the TargetingData used or created will be type 16 (DirectIpTargeting) instead of type 7 (ThirdPartyData), which is the default value. |
| SubProviderId | string |  | The ID of the third-party data sub-provider that owns the segment. _(nullable)_ |
| TaxonomyComplianceStatus | `DMP_ThirdPartyDataTaxonomyApprovalStatus` |  | The approval status for the [creation](/v3/portal/data/doc/ThirdPartyDataManagement#create-data-elements) of a third-party data segment. The following is the statuses and their descriptions:   - `NotInQueue`: The taxonomy changes have not been queued for processing yet.   - `Pending`: The taxonomy changes have been processed and are pending approval.   - `Approved`: The taxonomy changes have been approved.   - `Denied`: The taxonomy changes have been processed but denied approval. Segments with this status cannot be used in the DMP.   If approval status is `Denied`, the issue may be that the taxonomy includes sensitive categories. For details, see [Check Data Change Status](/v3/portal/data/doc/ThirdPartyDataManagement#check-status). |
| ThirdPartyDataBrandId | string |  | Optional brand assigned when this segment is created. The brand must belong to the same   provider and sub-provider as the segment. All rates for this segment must use this brand.   Ancestor rates for other brands do not propagate to this segment. Other descendants   can still inherit rates that match their own brand, or any brand if they are unbound.   On update, omit this property or supply the   existing brand ID; assigning, changing, or clearing a brand is not supported. _(maxLength 32)_ |
| ThirdPartyDataId | integer (int64) |  | The unique ID for the third-party data segment. This ID is used for retargeting purposes, for example, when adding segments to audiences. |
| AudienceSize | integer (int64) |  | An optional audience size for this segment. _(nullable; DEPRECATED; deprecation: This property is no longer actively used in our system. For new integrations, set the value to 0.)_ |

### `DMP_ThirdPartyDataTaxonomy_put`

A Third Party Data element - part of the provider's taxonomy

| Field | Type | Required | Description |
|---|---|---|---|
| ProviderElementId | string | yes | The unique ID assigned to the segment when the taxonomy [was designed](/v3/portal/data/doc/DataTaxonomyDesign).    - This ID is used to identify a data segment that you uploaded.   - This value was used in the `Name` field in the [POST /data/thirdparty](/v3/portal/data/doc/post-data-thirdparty) endpoint when data was sent, which links the segment between the two API suites.   - This value is immutable after creation. Recommended approach: use a sequential numeric value or an alphanumeric identifier with a maximum of 256 characters.   - Do not include descriptive words or phrases (for example, brand names, product names, or audience groups). _(maxLength 512)_ |
| ProviderId | string | yes | The unique ID that your Technical Account Manager provided to you at the [initial setup](/v3/portal/data/doc/DataGetStarted3pProviderAudience) during the onboarding process. _(maxLength 32)_ |
| AudienceExpansion | `AudienceExpansion_SegmentAudienceExpansion_put` |  | An optional audience expansion configuration for this segment. _(nullable)_ |
| Buyable | boolean |  | If set to `true`, indicates that the segment is visible and available for buyers in the DMP. For details, see [Audience Data Segments and Rates](/v3/portal/data/doc/ThirdPartyDataManagement).   **IMPORTANT**: Always set this value to `true`, unless you are implementing a [legacy taxonomy](/v3/portal/data/doc/DataLegacyTaxonomy) with container elements. |
| Description | string |  | An optional description of the data segment, displayed to customers in the DMP. While the limit is 4000 characters, to ensure readability, consider using a maximum of 256 characters. _(nullable)_ |
| DisplayName | string |  | The full path for the segment that determines the relationships between the segments in the taxonomy. For details, see [Third-Party Data Taxonomy Design](/v3/portal/data/doc/DataTaxonomyDesign).   - The following special characters are allowed: comma `,` colon `:` hyphen `-` underscore `_` ampersand &amp; apostrophe `'` forward slash `/` backslash `\` pipe `\|` plus `+` greater than sign &gt; less than sign &lt; equal sign `=` asterisk `*` parentheses `()` period `.` question mark `?`   - Do not include tabs or other special characters such as quotation mark `"` or caret `^`.   - This value is immutable when the data segment has a taxonomy compliance status of `Denied` or `Pending`.   - In the DMP, only the end of the branch in the segment hierarchy (the text that follows the last greater than sign) is displayed as the segment name. For example, a segment with the full path *Interest &gt; Technology &gt; Computers* appears as *Computers*.   - To increase relevance and help advertisers better understand your segments, use clear and descriptive names. Do not use random letters or numbers, or generic labels like `PROVIDER_NAME` or `Custom Segment 1234`. For details, see [Segment Naming Guidelines](/v3/portal/data/doc/ThirdPartyDataManagement#naming-guidelines). _(maxLength 1024)_ |
| IsDirectIPTargeting | boolean |  | If set to `true`, the TargetingData used or created will be type 16 (DirectIpTargeting) instead of type 7 (ThirdPartyData), which is the default value. |
| ParentElementId | string |  | The ID of the topmost parent segment of the taxonomy.   - For syndicated taxonomies, set this value to `ROOT`.   - For custom taxonomies, set this value to `CUSTOM`.   - Immutable after creation.   For details, see [Third-Party Data Taxonomy Design](/v3/portal/data/doc/DataTaxonomyDesign).   **NOTE**: If you are implementing a legacy taxonomy, where this property defines the hierarchical parent-child relations, this must be the `ProviderElementId` value from the parent segment in the taxonomy. For details, see [Third-Party Data Legacy Taxonomy Design](/v3/portal/data/doc/DataLegacyTaxonomy). _(maxLength 512)_ |
| SubProviderId | string |  | The ID of the third-party data sub-provider that owns the segment. _(nullable)_ |
| TaxonomyComplianceStatus | `DMP_ThirdPartyDataTaxonomyApprovalStatus` |  | The approval status for the [creation](/v3/portal/data/doc/ThirdPartyDataManagement#create-data-elements) of a third-party data segment. The following is the statuses and their descriptions:   - `NotInQueue`: The taxonomy changes have not been queued for processing yet.   - `Pending`: The taxonomy changes have been processed and are pending approval.   - `Approved`: The taxonomy changes have been approved.   - `Denied`: The taxonomy changes have been processed but denied approval. Segments with this status cannot be used in the DMP.   If approval status is `Denied`, the issue may be that the taxonomy includes sensitive categories. For details, see [Check Data Change Status](/v3/portal/data/doc/ThirdPartyDataManagement#check-status). |
| ThirdPartyDataBrandId | string |  | Optional brand assigned when this segment is created. The brand must belong to the same   provider and sub-provider as the segment. All rates for this segment must use this brand.   Ancestor rates for other brands do not propagate to this segment. Other descendants   can still inherit rates that match their own brand, or any brand if they are unbound.   On update, omit this property or supply the   existing brand ID; assigning, changing, or clearing a brand is not supported. _(maxLength 32)_ |
| ThirdPartyDataId | integer (int64) |  | The unique ID for the third-party data segment. This ID is used for retargeting purposes, for example, when adding segments to audiences. |
| AudienceSize | integer (int64) |  | An optional audience size for this segment. _(nullable; DEPRECATED; deprecation: This property is no longer actively used in our system. For new integrations, set the value to 0.)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ThirdPartyDataTaxonomy_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DMP_ThirdPartyDataTaxonomy`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `AudienceExpansion_SegmentAudienceExpansion`

| Field | Type | Required | Description |
|---|---|---|---|
| Countries | array<string> |  | The list of countries to consider for seed users in cross-device and lookalike modeling. Valid values follow the [Alpha-2 / ISO 3166 standards](https://www.iban.com/country-codes). |
| IsCrossDeviceExpansionEnabled | boolean |  | If set to `true`, turn on cross-device modeling for this segment. The default value is `false`.    **NOTE**: If both cross-device and lookalike modeling are enabled on a segment, the audience first expands based on cross-device expansion, then uses the expanded group as the source for lookalike expansion.   For details and an example, see [Third-Party Data Audience Expansion](/provider/docsApp/GuidesProvider/audience/doc/DataThirdPartyAudienceExpansion). |
| IsEnabled | boolean |  | If set to `true`, turns on audience expansion for the segment. The default value is `false`.   The expanded audience segment requires one or more existing [audience segments](/v3/portal/data/doc/DataThirdPartyIntegrationAudience) as a seed, or starting point, to generate a larger, more targeted audience segment. Add the existing audience segments by listing their corresponding provider element IDs in the `ProviderElementIds` array. Then, define the properties for the expanded audience segment.   **NOTE**: If both cross-device and lookalike modeling are enabled on a segment, the audience first expands based on cross-device expansion, then uses the expanded group as the source for lookalike expansion.   For details and an example, see [Third-Party Data Audience Expansion](/provider/docsApp/GuidesProvider/audience/doc/DataThirdPartyAudienceExpansion). |
| IsLookAlikeExpansionEnabled | boolean |  | If set to `true`, turn on lookalike modeling for this segment. The default value is `false`. |
| LastProcessedUTC | string (date-time) |  | The date and time (in UTC) when audience expansion was last processed for this segment. _(nullable)_ |
| LookalikeSettings | `AudienceExpansion_AudienceExpansionLookalikeSettings` |  | The lookalike audience expansion settings for the segment. When lookalike settings are used together in any combination, the following interactions can apply:    - The calculation for segments is resolved in the following order: top percent, max size, then max expansion factor.   - Top percent prunes the highest-scoring users are eligible for expansion.   - The max size and max expansion factor can cap how many users are included in the expanded user set.       - Max size caps based on its flat value.       - Max expansion factors cap using the seed audience size multiplied by the factor.       - If both max size and max expansion are set, the cap is the smaller value. _(nullable)_ |
| ProviderElementIds | array<string> |  | The provider element IDs of the segments to be used as the seed for audience expansion. |

### `AudienceExpansion_SegmentAudienceExpansion_post`

| Field | Type | Required | Description |
|---|---|---|---|
| Countries | array<string> | yes | The list of countries to consider for seed users in cross-device and lookalike modeling. Valid values follow the [Alpha-2 / ISO 3166 standards](https://www.iban.com/country-codes). |
| IsCrossDeviceExpansionEnabled | boolean | yes | If set to `true`, turn on cross-device modeling for this segment. The default value is `false`.    **NOTE**: If both cross-device and lookalike modeling are enabled on a segment, the audience first expands based on cross-device expansion, then uses the expanded group as the source for lookalike expansion.   For details and an example, see [Third-Party Data Audience Expansion](/provider/docsApp/GuidesProvider/audience/doc/DataThirdPartyAudienceExpansion). |
| IsEnabled | boolean | yes | If set to `true`, turns on audience expansion for the segment. The default value is `false`.   The expanded audience segment requires one or more existing [audience segments](/v3/portal/data/doc/DataThirdPartyIntegrationAudience) as a seed, or starting point, to generate a larger, more targeted audience segment. Add the existing audience segments by listing their corresponding provider element IDs in the `ProviderElementIds` array. Then, define the properties for the expanded audience segment.   **NOTE**: If both cross-device and lookalike modeling are enabled on a segment, the audience first expands based on cross-device expansion, then uses the expanded group as the source for lookalike expansion.   For details and an example, see [Third-Party Data Audience Expansion](/provider/docsApp/GuidesProvider/audience/doc/DataThirdPartyAudienceExpansion). |
| IsLookAlikeExpansionEnabled | boolean | yes | If set to `true`, turn on lookalike modeling for this segment. The default value is `false`. |
| ProviderElementIds | array<string> | yes | The provider element IDs of the segments to be used as the seed for audience expansion. |
| LastProcessedUTC | string (date-time) |  | The date and time (in UTC) when audience expansion was last processed for this segment. _(nullable)_ |
| LookalikeSettings | `AudienceExpansion_AudienceExpansionLookalikeSettings` |  | The lookalike audience expansion settings for the segment. When lookalike settings are used together in any combination, the following interactions can apply:    - The calculation for segments is resolved in the following order: top percent, max size, then max expansion factor.   - Top percent prunes the highest-scoring users are eligible for expansion.   - The max size and max expansion factor can cap how many users are included in the expanded user set.       - Max size caps based on its flat value.       - Max expansion factors cap using the seed audience size multiplied by the factor.       - If both max size and max expansion are set, the cap is the smaller value. _(nullable)_ |

### `AudienceExpansion_SegmentAudienceExpansion_put`

| Field | Type | Required | Description |
|---|---|---|---|
| Countries | array<string> | yes | The list of countries to consider for seed users in cross-device and lookalike modeling. Valid values follow the [Alpha-2 / ISO 3166 standards](https://www.iban.com/country-codes). |
| IsCrossDeviceExpansionEnabled | boolean | yes | If set to `true`, turn on cross-device modeling for this segment. The default value is `false`.    **NOTE**: If both cross-device and lookalike modeling are enabled on a segment, the audience first expands based on cross-device expansion, then uses the expanded group as the source for lookalike expansion.   For details and an example, see [Third-Party Data Audience Expansion](/provider/docsApp/GuidesProvider/audience/doc/DataThirdPartyAudienceExpansion). |
| IsEnabled | boolean | yes | If set to `true`, turns on audience expansion for the segment. The default value is `false`.   The expanded audience segment requires one or more existing [audience segments](/v3/portal/data/doc/DataThirdPartyIntegrationAudience) as a seed, or starting point, to generate a larger, more targeted audience segment. Add the existing audience segments by listing their corresponding provider element IDs in the `ProviderElementIds` array. Then, define the properties for the expanded audience segment.   **NOTE**: If both cross-device and lookalike modeling are enabled on a segment, the audience first expands based on cross-device expansion, then uses the expanded group as the source for lookalike expansion.   For details and an example, see [Third-Party Data Audience Expansion](/provider/docsApp/GuidesProvider/audience/doc/DataThirdPartyAudienceExpansion). |
| IsLookAlikeExpansionEnabled | boolean | yes | If set to `true`, turn on lookalike modeling for this segment. The default value is `false`. |
| ProviderElementIds | array<string> | yes | The provider element IDs of the segments to be used as the seed for audience expansion. |
| LastProcessedUTC | string (date-time) |  | The date and time (in UTC) when audience expansion was last processed for this segment. _(nullable)_ |
| LookalikeSettings | `AudienceExpansion_AudienceExpansionLookalikeSettings` |  | The lookalike audience expansion settings for the segment. When lookalike settings are used together in any combination, the following interactions can apply:    - The calculation for segments is resolved in the following order: top percent, max size, then max expansion factor.   - Top percent prunes the highest-scoring users are eligible for expansion.   - The max size and max expansion factor can cap how many users are included in the expanded user set.       - Max size caps based on its flat value.       - Max expansion factors cap using the seed audience size multiplied by the factor.       - If both max size and max expansion are set, the cap is the smaller value. _(nullable)_ |

### `AudienceExpansion_AudienceExpansionLookalikeSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| IncludeSeed | boolean |  | - If set to `true` (default value), the seed is pushed to the target segment.   - If set to `false`, only the expanded user set is pushed to the target segment.   - The expanded user set may contain seed users. |
| MaxExpansionFactor | number (double) |  | - When this option is set, the maximum size of the expanded user set is determined by multiplying the size of the seed by the `MaxExpansionFactor` property.   - The minimum value is `0.01`; the maximum value is `9999.99`.   - The default value is `null`, which indicates this feature is turned off.   - Values with more than two decimal places are rounded to two decimal points. _(nullable)_ |
| MaxSize | integer (int32) |  | - The maximum size of the expanded user set.   - The minimum value is `1`, the maximum value is `2147483647`.   - The default value is `null`, which indicates this feature is turned off. _(nullable)_ |
| TopPercent | number (double) |  | - The top percent of users to include in the target segment.   - The minimum value is `0.01`, meaning 0.01%; the maximum value is `100`, meaning 100%. The default value is `10`.   - Values with more than two decimal places are rounded to two decimal points. |

