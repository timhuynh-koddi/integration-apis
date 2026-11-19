# TikTok Marketing API v1.3: Files (video and image upload)

> Source: TikTok API for Business docs (https://business-api.tiktok.com/portal/docs, doc content API) and the official `tiktok/tiktok-business-api-sdk` OpenAPI files (`yml_files/`). Base URL: https://business-api.tiktok.com/open_api. Auth header: `Access-Token`. Fetched 2026-11-19.

---

## POST /v1.3/file/video/ad/upload/

**Upload a video** (docs: https://business-api.tiktok.com/portal/docs/upload-a-video/v1.3)

Use this endpoint to upload a video to the Asset Library and use the obtained video ID for creating ads.

Request timeout for this interface is 10s, and the transmission speed depends on network bandwidth. Please make sure that the file size is reasonable.

If you upload a video that already exists in the advertiser account, the API response will be the information of the existing video.

> <span style="color:DodgerBlue">**Note**</span><br>
> - We recommend that you turn on Smart Fix when uploading your videos. This API will automatically detect and fix issues in your videos, ensuring that they meet our requirements for delivery. To learn about how to enable Smart Fix, please refer to [Smart Fix](https://business-api.tiktok.com/portal/docs?id=1741472523309058).
> - Starting April 24th, 2025,  Smart Fix will limit automatic fixes only to the flaw types `LOW_RESOLUTION` and `ILLEGAL_VIDEO_SIZE` and function as follows:
> 	- Resolution adjustments:
> 		- `LOW_RESOLUTION`: If this issue is detected, the video is automatically enhanced to a standard resolution of 1280x720 pixels, also referred to as 720p.
>   	- `ILLEGAL_VIDEO_SIZE`: If this issue is detected, the video is automatically adjusted to one of the standard aspect ratios: 1:1 (square), 9:16 (vertical), or 16:9 (horizontal).
>  	- Output limitation: Only one fixed version of the video will be returned.
>  	- Naming conventions: The fixed video will be named either according to the custom name specified via the `file_name` parameter or following the default naming convention if no custom name is given (see the description of `file_name` for details).

# Before you start
You need to confirm the video meets the [Creative requirements for delivery](https://ads.tiktok.com/help/article?aid=6669199281502552069) before the video can be used in ads.

# Comparing v1.2 and v1.3
The following table outlines the differences between v1.2 and v1.3 endpoints.

|Changes|v1.2|v1.3|
|---|---|---|
|Endpoint path|/v1.2/file/video/ad/upload/|/v1.3/file/video/ad/upload/|
|Request parameter data type |`advertiser_id`: number|`advertiser_id`: string|
|New request parameter |/|`is_third_party`<br>`flaw_detect`<br>`auto_fix_enabled`<br>`auto_bind_enabled`<br>`video_id`<br>`pre_review_enabled`<br>`pre_review_info`|
|Response parameter name|`poster_url` <br>`url`  |`video_cover_url`<br>`preview_url`|
|Response parameter deprecated in v1.3|/|`id`|
|New response parameter|/|`fix_task_id`<br>`flaw_types`<br>`preview_url_expire_time`<br>`pre_review_task_id`|


# Request
**Endpoint** https://business-api.tiktok.com/open_api/v1.3/file/video/ad/upload/



**Method** POST

**Header**

|Field|Data Type|Description|
|---|---|---|
|Access-Token (required)|string|Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).|
|Content-Type (required)|string|Request message type.<br>If `upload_type` is `UPLOAD_BY_FILE`, use `multipart/form-data` . <br>If `upload_type` is `UPLOAD_BY_URL` or `UPLOAD_BY_FILE_ID`, use `application/json`.|


**Parameters**

|Field|Data Type|Description|
|---|---|---|
| advertiser_id (required)|string| Advertiser ID.|
| file_name |string |Video name. <br><br>Length limit: 1 - 100 characters. <br><br>Default value: <ul><li>When Smart Fix is not enabled (`flaw_detect` and `auto_fix_enabled` are set to `false`): <ul><li>If you upload a local file, the default name will be the original file name.</li><li>If you provide a URL, the default name will be the filename portion of the URL path.</li></ul>If the original file name or the filename portion of the URL path exceeds 100 characters, it will be truncated to use only the first 100 characters.</li><li>When Smart Fix is enabled (`flaw_detect` and `auto_fix_enabled` are set to `true`):<ul><li> The default name will be either the original file name (for a local file) or the filename portion of the URL path (for a URL). If you specify a custom video name via `file_name`, the `file_name` value will be the name of the fixed video.</li></ul></li></ul><br><p><span style="color:darkred"><b>Note</b></span>: Videos under the same `advertiser_id` cannot have duplicated file names. You can call [/file/name/check/](https://ads.tiktok.com/marketing_api/docs?id=1759130033155073) to check whether the file name has been used.<br>If you get an error about duplicated file names, please rename the files or append timestamps to the original file names (for example, in the format of `<original_filename>_<timestamp>`, and upload the videos again. |
| upload_type |string|Video upload method. <br><br>Default value: `UPLOAD_BY_FILE`<br><br>Enum values: `UPLOAD_BY_FILE`, `UPLOAD_BY_URL`, `UPLOAD_BY_FILE_ID`, `UPLOAD_BY_VIDEO_ID`.<br><br><p><span style="color:darkred"><b>Note</b></span>: If you set this field to `UPLOAD_BY_FILE`, `UPLOAD_BY_URL` or `UPLOAD_BY_FILE_ID`, a new video ID (`video_id`) will be returned. If you upload the same video multiple times using any of these three methods, you'll obtain a new video ID for each upload.|
| video_file {+Conditional}|file| Required when `upload_type` is `UPLOAD_BY_FILE`. <br><br>Video file.<br><br>Recommended settings： <br>(1) File size：500 MB limit <br>(2) ratio：9:16, 16:9, and 1:1.<br>(3) Format：.mp4, .mov, .mpeg, .avi.<br><br>Example: `'video_file=@"/Users/admin/Downloads/sample-mov-file.mov"'`<br><br><p><span style="color:darkred"><b>Note</b></span>: Before uploading, make sure that the file is <b>playable</b> and in a <b>supported format</b>. |
| video_signature {+Conditional}|string|Required when `upload_type` is `UPLOAD_BY_FILE`.<br><br>Video MD5 (used for server verification). |
| video_url {+Conditional} | string | Required when `upload_type` is `UPLOAD_BY_URL`.<br><br>Video URL address, such as http://xxx.xxx. <br>(1) File size: better within 10MB. <br>(2) Verification: We will verify `Content-Type` in the response header. A common invalid media type is text (`Content-Type` = text/*, such as text/html, text/plain). Also, we will verify the data if you set a `Content-MD5` in the response header. <br>(3) Encoding: The URL needs to be a valid URL in the browser. For instance, the spaces in the URL need to be encoded into `%20`. You can copy and paste the URL into a browser address bar, then the URL will be automatically encoded.<br>(4) Others: ratio, format, resolution and bitrate limitation is the same as `video_file`.<br><br><p><span style="color:darkred"><b>Note</b></span>: Before uploading, make sure that the video URL is <b>playable</b> and in a <b>supported format</b>. If the URL is invalid or in an unsupported format (i.e. txt.), you may see an error message or obtain an invalid video ID that cannot be used for ad creation. |
|file_id{+Conditional}| string |Required when `upload_type` is `UPLOAD_BY_FILE_ID`. <br><br>The `file_id` of the file that you want to upload. This field is for files that are uploaded to the file repository. You can get `file_id` via the [Upload Files](https://ads.tiktok.com/marketing_api/docs?id=1737719988918274) endpoints. |
|video_id{+Conditional}|string|Required when `upload_type` is `UPLOAD_BY_VIDEO_ID`.<br><br>Video ID. <br><br><p><span style="color:darkred"><b>Note</b></span>: You should pass in the `video_id` of the videos created on <b>TikTok Ads Manager</b> or through <b>API</b>. If you pass in the value from other sources, you may see an error message or cannot use the uploaded video for ad creation.<br> You can obtain `video_id` in the response of the [/file/video/ad/upload/](https://business-api.tiktok.com/portal/docs?id=1737587322856449) endpoint or by using the [/file/video/ad/search/](https://business-api.tiktok.com/portal/docs?id=1740050472224769) endpoint. |
|is_third_party|boolean| The video is third party or not.|
|flaw_detect|boolean|Whether to automatically detect an issue in your video. <br><br>Default value: `false`. |
|auto_fix_enabled|boolean|Whether to automatically fix the detected issue. <br><br>Default value : `false`. <br><br> If an issue is detected in your video: <ul><li>When `auto_fix_enabled` is set to `false`, we'll return an error message with flaw types indicated.</li><li>When `auto_fix_enabled` is set to `true`, we'll automatically fix the `LOW_RESOLUTION` and `ILLEGAL_VIDEO_SIZE` issues  and return `fix_task_id` and `flaw_types`. </li></ul><br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>When a `LOW_RESOLUTION` issue is detected, the video is automatically enhanced to a standard resolution of 1280x720 pixels, also referred to as 720p.</li><li>When an `ILLEGAL_VIDEO_SIZE` issue is detected, the video is automatically adjusted to one of the standard aspect ratios: 1:1 (square), 9:16 (vertical), or 16:9 (horizontal).</li></ul>|
|auto_bind_enabled|boolean| Valid only when `flaw_detect` = `true`  and `auto_fix_enabled` = `true`. <br><br>Whether to automatically upload the fixed video to your creative library. <br><br>Default value : `false`. |
|pre_review_enabled|boolean|Whether to create a pre-review task for the video and any associated materials, which may include ad text and the landing page URL.<br><br>A pre-review task is a process initiated to evaluate and assess the compliance and quality of your creatives before they are used to create ads, ensuring that they meet TikTok advertising guidelines and standards.<br><br>Supported values: `true`, `false`.<br><br>Default value: `false`.<br><br>When you set this field to `true`, you need to specify `pre_review_info` simultaneously, and the response will include the `pre_review_task_id`.|
|pre_review_info {+Conditional}|object|Required when `pre_review_enabled` is set to `true`.<br><br>Additional details for the pre-review.|
| ↳ landing_page_url|string|The landing page URL to use in your ad.|
| ↳ ad_text|string|The ad text to use in your ad.<br><br>An ad text is shown to your audience as part of your ad creative, to deliver the message you intend to communicate to them.<br>Ad text must be 1-100 characters long and cannot contain emoji.<br>Each word in Chinese or Japanese counts as two characters, while each letter in English counts as one character.|
| ↳ location_codes {+Conditional}|string[]|Required when `pre_review_info` is specified.<br><br>The codes of the locations that you want to target.<br><br>Max size: 1.<br><br>For enum values, see [List of values for `location_codes` or `location_code`](https://business-api.tiktok.com/portal/docs/upload-a-video/v1.3#anchor-3-1).<br><br>Example: `US`.|
| ↳ is_ecommerce|boolean|Whether the creatives are intended for use in E-commerce ads, including [GMV Max Campaigns](https://business-api.tiktok.com/portal/docs/create-gmv-max-campaigns/v1.3) and Catalog Ads.<br><br>Supported values: `true`, `false`.<br>Default value: `false`.|


### List of values for `location_codes` or `location_code`

The following table lists the enum values for the request parameter `location_codes` in [/creative/pre_review/task/create/](https://business-api.tiktok.com/portal/docs/create-a-creative-pre-review-task/v1.3), [/file/video/ad/upload/](https://business-api.tiktok.com/portal/docs/upload-a-video/v1.3), and [/file/image/ad/upload/](https://business-api.tiktok.com/portal/docs/upload-an-image-reference/v1.3), and the response parameter `location_code` in [/creative/pre_review/task/get/](https://business-api.tiktok.com/portal/docs/get-the-result-of-a-creative-pre-review-task/v1.3).

|Location Code|Description|
|---|---|
|`AD`|Andorra|
|`AE`|United Arab Emirates|
|`AG`|Antigua and Barbuda|
|`AI`|Anguilla|
|`AL`|Albania|
|`AO`|Angola|
|`AR`|Argentina|
|`AT`|Austria|
|`AU`|Australia|
|`AW`|Aruba|
|`AZ`|Azerbaijan|
|`BA`|Bosnia and Herzegovina|
|`BB`|Barbados|
|`BD`|Bangladesh|
|`BE`|Belgium|
|`BG`|Bulgaria|
|`BH`|Bahrain|
|`BL`|Saint Barthélemy|
|`BM`|Bermuda|
|`BO`|Bolivia|
|`BQ`|Caribbean Netherlands|
|`BR`|Brazil|
|`BS`|The Bahamas|
|`BY`|Belarus|
|`BZ`|Belize|
|`CA`|Canada|
|`CD`|Democratic Republic of the Congo|
|`CH`|Switzerland|
|`CL`|Chile|
|`CO`|Colombia|
|`CR`|Costa Rica|
|`CU`|Cuba|
|`CV`|Cabo Verde|
|`CW`|Curaçao|
|`CY`|Cyprus|
|`CZ`|Czech Republic|
|`DE`|Germany|
|`DJ`|Djibouti|
|`DK`|Denmark|
|`DM`|Dominica|
|`DO`|Dominican Republic|
|`DZ`|Algeria|
|`EC`|Ecuador|
|`EE`|Estonia|
|`EG`|Egypt|
|`ER`|Eritrea|
|`ES`|Spain|
|`FI`|Finland|
|`FO`|Faroe Islands|
|`FR`|France|
|`GB`|United Kingdom|
|`GD`|Grenada|
|`GE`|Georgia|
|`GF`|French Guiana|
|`GG`|Bailiwick of Guernsey|
|`GI`|Gibraltar|
|`GL`|Greenland|
|`GN`|Guinea|
|`GP`|Guadeloupe|
|`GQ`|Equatorial Guinea|
|`GR`|Greece|
|`GT`|Guatemala|
|`GW`|Guinea-Bissau|
|`HK`|Hong Kong|
|`HN`|Honduras|
|`HR`|Croatia|
|`HT`|Haiti|
|`HU`|Hungary|
|`ID`|Indonesia|
|`IE`|Ireland|
|`IL`|Israel|
|`IM`|Isle of Man|
|`IN`|India|
|`IQ`|Iraq|
|`IS`|Iceland|
|`IT`|Italy|
|`JE`|Jersey|
|`JM`|Jamaica|
|`JO`|Jordan|
|`JP`|Japan|
|`KE`|Kenya|
|`KH`|Cambodia|
|`KM`|Comoros|
|`KN`|Saint Kitts and Nevis|
|`KR`|South Korea|
|`KW`|Kuwait|
|`KY`|Cayman Islands|
|`KZ`|Kazakhstan|
|`LB`|Lebanon|
|`LC`|Saint Lucia|
|`LI`|Liechtenstein|
|`LK`|Sri Lanka|
|`LT`|Lithuania|
|`LU`|Luxembourg|
|`LV`|Latvia|
|`LY`|Libya|
|`MA`|Morocco|
|`MC`|Monaco|
|`MD`|Moldova|
|`ME`|Montenegro|
|`MF`|Saint Martin|
|`MK`|North Macedonia|
|`MM`|Myanmar|
|`MO`|Macao|
|`MQ`|Martinique|
|`MR`|Mauritania|
|`MS`|Montserrat|
|`MT`|Malta|
|`MX`|Mexico|
|`MY`|Malaysia|
|`MZ`|Mozambique|
|`NG`|Nigeria|
|`NI`|Nicaragua|
|`NL`|Netherlands|
|`NO`|Norway|
|`NP`|Nepal|
|`NZ`|New Zealand|
|`OM`|Oman|
|`PA`|Panama|
|`PE`|Peru|
|`PF`|French Polynesia|
|`PH`|Philippines|
|`PK`|Pakistan|
|`PL`|Poland|
|`PM`|Saint Pierre and Miquelon|
|`PR`|Puerto Rico|
|`PS`|Palestine|
|`PT`|Portugal|
|`PY`|Paraguay|
|`QA`|Qatar|
|`RO`|Romania|
|`RS`|Serbia|
|`RU`|Russia|
|`SA`|Saudi Arabia|
|`SD`|Sudan|
|`SE`|Sweden|
|`SG`|Singapore|
|`SI`|Slovenia|
|`SJ`|Svalbard and Jan Mayen|
|`SK`|Slovakia|
|`SM`|San Marino|
|`SO`|Somalia|
|`SS`|South Sudan|
|`ST`|Sao Tome and Principe|
|`SV`|El Salvador|
|`SX`|Sint Maarten|
|`SY`|Syria|
|`TC`|Turks and Caicos Islands|
|`TD`|Chad|
|`TF`|French Southern and Antarctic Lands|
|`TH`|Thailand|
|`TN`|Tunisia|
|`TR`|Turkey|
|`TT`|Trinidad and Tobago|
|`TW`|Taiwan (Province of China)|
|`UA`|Ukraine|
|`US`|United States|
|`UY`|Uruguay|
|`UZ`|Uzbekistan|
|`VC`|Saint Vincent and the Grenadines|
|`VE`|Venezuela|
|`VG`|British Virgin Islands|
|`VI`|Virgin Islands of the United States|
|`VN`|Vietnam|
|`YE`|Yemen|
|`ZA`|South Africa|


### Example
#### Upload by file with Smart Fix enabled
```xcodeblock
(code curl http)
curl --location --request POST 'https://business-api.tiktok.com/open_api/v1.3/file/video/ad/upload/' \
--header 'Access-Token: {{Access-Token}}' \
--form 'advertiser_id="{{advertiser_id}}"' \
--form 'file_name="{{file_name}}"' \
--form 'upload_type="UPLOAD_BY_FILE"' \
--form 'video_file=@"/Desktop/Example.mp4"' \
--form 'video_signature="{{video_signature}}"' \
--form 'flaw_detect="true"' \
--form 'auto_fix_enabled="true"' \
--form 'auto_bind_enabled="true"'
(/code)
```

#### Upload by file with Smart Fix disabled
```xcodeblock
(code curl http)
curl --location --request POST 'https://business-api.tiktok.com/open_api/v1.3/file/video/ad/upload/' \
--header 'Access-Token: {{Access-Token}}' \
--form 'advertiser_id="{{advertiser_id}}"' \
--form 'file_name="{{file_name}}"' \
--form 'upload_type="UPLOAD_BY_FILE"' \
--form 'video_file=@"/Desktop/Example.mp4"' \
--form 'video_signature="{{video_signature}}"'
(/code)
```

#### Upload by URL with Smart Fix enabled
```xcodeblock
(code curl http)
curl --location  --request POST 'https://business-api.tiktok.com/open_api/v1.3/file/video/ad/upload/' \
--header 'Access-Token: {{Access-Token}}' \
--data '{
    "advertiser_id":"{{advertiser_id}}",
    "file_name":"{{file_name}}",
    "upload_type":"UPLOAD_BY_URL",
    "video_url":"{{video_url}}",
    "flaw_detect":true,
    "auto_fix_enabled":true,
    "auto_bind_enabled":true
}'
(/code)
```

# Response

|Field|Data Type|Description|
|-|-|-|
|code |number|Response code. For the complete list of response codes and descriptions, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).|
|message |string|Response message. For details, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).|
|request_id |string|The log id of a request, which uniquely identifies the request.|
|data |object[]|Returned data. For compatibility reasons, an array, instead of an object, is returned, and the array contains only one object. <br><p><span style="color:darkred"><b>Note</b></span>: Due to the latency between client and server, it is possible that only `video_id` is returned. In this case, you can wait for 30 seconds to five minutes and use the [/file/video/ad/search/](https://business-api.tiktok.com/portal/docs?id=1740050472224769) endpoint to retrieve other data.  |
| ↳ video_cover_url |string|Temporary URL for video cover, valid for six hours and needs to be re-acquired after expiration. <br>The expiration time is included in the URL after the `x-expires` parameter, in the format of an Epoch/Unix timestamp in seconds. <br>Example: `http://p16-sign-sg.tiktokcdn.com/v0201/b99a388e3709470be5c~tplv-noop.image?x-expires=<strong>1671742348</strong>&x-signature=FziJhvED9NDTDmPofv3I%3D`.|
| ↳ format |string|Video format.  |
| ↳ preview_url |string|Video preview link, valid for six hours and needs to be re-acquired after expiration. <br>To find out the expiration time of the preview link, see `preview_url_expire_time`.|
| ↳ preview_url_expire_time|string|The expiration time of the video preview link, in the format of `YYYY-MM-DD HH:MM:SS` (UTC+0).|
| ↳ file_name |string |Video name. |
| ↳ displayable |boolean |Whether it can be displayed on the platform.|
| ↳ height |number|Video height.  |
| ↳ width |number|Video width.  |
| ↳ bit_rate |number|Bit rate in bps.|
| ↳ create_time |string |Creation time. UTC time. Format: 2020-06-10T07:39:14Z. |
| ↳ modify_time |string |Modification time. UTC time. Format: 2020-06-10T07:39:14Z. |
| ↳ signature |string|Video file MD5. |
| ↳ duration |float|Video duration, in seconds.  |
| ↳ video_id |string|Video ID, which can be used to create ads.<br><br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>If you upload via video ID (`upload_type` as `UPLOAD_BY_VIDEO_ID`), the same video ID will be returned.</li><li>If you upload via file , URL or file ID (`upload_type` as `UPLOAD_BY_FILE`, `UPLOAD_BY_URL` or `UPLOAD_BY_FILE_ID`), a new video ID (`video_id`) will be returned. If you upload the same video multiple times using any of these three methods, you'll obtain a new video ID for each upload.</li></ul> |
| ↳ size |number|Video size, in bytes. |
| ↳ material_id|string|Material ID|
| ↳ allowed_placements |string[] |Available placements. Due to music copyright, some materials generated by creative tools can only be shown on TikTok. It won't pass when they are created on other placements. For enum values, see [Enumerations-Ad Management-Placement](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138).<br><br><p><span style="color:darkred"><b>Note</b></span>: The values `PLACEMENT_TOPBUZZ` and `PLACEMENT_HELO` for this field cannot be used for ad creation and will be deprecated in the next API version.|
| ↳ allow_download |boolean |Whether the video is downloadable. Due to the music copyright, some materials generated by creative tools are only allowed to preview. It is prohibited to download and disseminate them. |
| ↳ fix_task_id|string|Returned only when you've set both `flaw_detect` and  `auto_fix_enabled` to `true` in request, and video issues are detected. <br><br>Fix task ID.  <br><br>To obtain the fixed video, you can use one of the following methods:<ul><li>Pass the value of this field to the `task_id` field in [/video/fix/task/get/](https://business-api.tiktok.com/portal/docs?id=1741469487859714).</li><li>Retrieve the fixed video from [/file/video/ad/search/](https://business-api.tiktok.com/portal/docs?id=1740050472224769) if you have set `auto_bind_enabled` to `true` in the request.</li></ul>|
| ↳ flaw_types|string[]|Returned only when you've set both `flaw_detect` and  `auto_fix_enabled` to `true` in request, and video issues are detected.<br><br>Video issue types. <br><br> Enum values: <ul><li>`LOW_RESOLUTION`: Video resolution is lower than 540x960 px, which doesn't meet our requirements.</li><li>`ILLEGAL_VIDEO_SIZE`: The video size is not correct. Use the standard video size: Square (1:1) / Vertical (9:16) / Horizontal (16:9). </li><li>`NO_BGM`(<span style="color:Red">deprecated</span>): The ad or video has no background audio, or the background audio is incoherent/unclear. </li><li>`BLACK_EDGE`(<span style="color:Red">deprecated</span>) :  A video image contains black bars, which affects user experience and is not allowed. </li><li>`ILLEGAL_DURATION`(<span style="color:Red">deprecated</span>): Video length is either longer than 60s or shorter than 5s, which doesn't meet our requirements.|
| ↳ pre_review_task_id|string|Returned only when `pre_review_enabled` in the request is set to `true`.<br><br>The ID of the pre-review task.<br><br>To obtain the result of the pre-review task, pass the value of this field to the `task_id` field in [/creative/pre_review/task/get/](https://business-api.tiktok.com/portal/docs/get-the-result-of-a-creative-pre-review-task/v1.3).|

### Example
#### Upload by file with Smart Fix enabled and issue detected
```xcodeblock
(code curl http)
HTTPS/1.1 200 OK
{
    "code": 0,
    "message": "OK",
    "request_id": "{{request_id}}",
    "data": [
        {
            "fix_task_id": "{{fix_task_id}}",
            "flaw_types": [
                "LOW_RESOLUTION"
            ]
        }
    ]
}
(/code)
```

#### Upload by file with Smart Fix disabled
> <span style="color:DodgerBlue">**Note**</span><br>
>Due to the latency between client and server, it is possible that only `video_id` is returned. In this case, you can wait for 30 seconds to five minutes and use the [/file/video/ad/search/](https://business-api.tiktok.com/portal/docs?id=1740050472224769) endpoint to retrieve other data.

```xcodeblock
(code curl http)
HTTPS/1.1 200 OK
{
    "code": 0,
    "message": "OK",
    "request_id": "{{request_id}}",
    "data": [
        {
            "video_id": "{{video_id}}"
        }
    ]
}
(/code)
```

#### Upload by URL with Smart Fix enabled and issue detected
```xcodeblock
(code curl http)
HTTPS/1.1 200 OK
{
    "code": 0,
    "message": "OK",
    "request_id": "{{request_id}}",
    "data": [
        {
            "fix_task_id": "{{fix_task_id}}",
            "flaw_types": [
                "ILLEGAL_VIDEO_SIZE"
            ]
        }
    ]
}
(/code)
```

---

## GET /v1.3/file/video/ad/info/

**Get info about videos** (docs: https://business-api.tiktok.com/portal/docs/get-info-about-videos/v1.3)

Use this endpoint to get the information about a list of videos that can be used in ads from the Asset Library.

### Comparing v1.2 and v1.3
 The following table outlines the differences between v1.2 and v1.3 endpoints.
 |Changes|v1.2|v1.3|
|---|---|---|
|Endpoint path|/v1.2/file/video/ad/info/|/v1.3/file/video/ad/info/|
|Request parameter data type |`advertiser_id`: number|`advertiser_id`: string|
|Response parameter name|`poster_url` <br>`url`  |`video_cover_url`<br>`preview_url`|
|Response parameter deprecated in v1.3|/|`id`|
|New response parameters|/|`preview_url_expire_time`|


### Request

**Endpoint**
https://business-api.tiktok.com/open_api/v1.3/file/video/ad/info/

**Method**  GET

**Header**

|Field|Data Type|Description|
|---|---|---|
|Access-Token (required)|string|Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).|


**Parameters**

|Field|Data Type|Description|
|---|---|---|
|advertiser_id (required)|string| Advertiser ID.|
|video_ids (required)|string[]|Video ID list. <br><br>Max size: 60. <br><br><p><span style="color:darkred"><b>Note</b></span>: If the video cannot be used in ads, the video ID will be ignored.|



#### Example

```xcodeblock
(code curl http)
curl --get -H "Access-Token:xxx" \\
--data-urlencode "advertiser_id=ADVERTISER_ID" \\
--data-urlencode "video_ids=VIDEO_IDS" \\
https://business-api.tiktok.com/open_api/v1.3/file/video/ad/info/
(/code)
```

### Response

|Field|Data Type|Description|
|---|---|---|
|code |number|Return code, see [Appendix-Return code](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).  |
|message |string|Return Message, see [Appendix-Return Information](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).  |
|data |object|Returned data. |
| ↳ list |list |Video data. |
| ↳↳ displayable |boolean |Whether it can be displayed on the platform.|
| ↳↳ width |number|Video width.  |
| ↳↳ video_cover_url |string|Temporary URL for video cover, valid for six hours and needs to be re-acquired after expiration. <br>The expiration time is included in the URL after the `x-expires` parameter, in the format of an Epoch/Unix timestamp in seconds. <br>Example: `http://p16-sign-sg.tiktokcdn.com/v0201/b99a388e3709470be5c~tplv-noop.image?x-expires=<strong>1671742348</strong>&x-signature=FziJhvED9NDTDmPofv3I%3D`.|
| ↳↳ bit_rate |number|Bit rate in bps.|
| ↳↳ format |string|Video format. |
| ↳↳ preview_url |string|Video preview link, valid for six hours and needs to be re-acquired after expiration. <br>To find out the expiration time of the preview link, see `preview_url_expire_time`.|
| ↳↳ preview_url_expire_time|string|The expiration time of the video preview link, in the format of `YYYY-MM-DD HH:MM:SS` (UTC+0).|
| ↳↳ duration |float|Video duration, in seconds.  |
| ↳↳ height |number|Video height.  |
| ↳↳ signature |string|Video file MD5. |
| ↳↳ video_id |string|Video ID, can be used to create ad in ad delivery.|
| ↳↳ size |number|Video size in bytes. |
| ↳↳ material_id|string|Material ID|
| ↳↳ allowed_placements |string[] |Available placements. Due to the music copyright, some materials generated by creative tools can only be shown on TikTok. It won't pass when they are created on other placements. For enum values, see  [Enumerations-Ad Management-Placement](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138).|
| ↳↳ allow_download |boolean |Whether the video is downloadable. Due to the music copyright, some materials generated by creative tools are only allowed to preview. It is prohibited to download and disseminate them. |
| ↳↳ file_name |string |Video name.|
| ↳↳ create_time |string |Creation time. UTC time. Format: 2020-06-10T07:39:14Z. |
| ↳↳ modify_time |string |Modification time. UTC time. Format: 2020-06-10T07:39:14Z. |
|request_id |string|The log id of a request, which uniquely identifies the request.|



#### Example

```xcodeblock
(code Success-Response http)
HTTPS/1.1 200 OK
{
    "message": "OK",
    "code": 0,
    "data": {
        "list": [
            {
                "format": "mp4",
                "preview_url": "http://v16-tiktokcdn-com.akamaized.net/2a19f67683ed9aa54b3df2e5c842f15d/5fccd703/video/tos/alisg/tos-alisg-v-0000/9a0033884eab42248ad6b46f7b11e44c/?a=0&br=3114&bt=1557&cd=0%7C0%7C0&cr=0&cs=0&dr=0&ds=3&er=&l=2020120607050201011517615618A693BE&lr=ad&mime_type=video_mp4&qs=0&rc=anNlbnRuOWU2eDMzZjYzM0Apdjh3ZHJuOWZzZTMzNDY6eWdwMnFebGgzYG1fLS0uMDRzc2RtX2huaDNfMHItLWAwLS06Yw%3D%3D&vl=&vr=",
                "file_name": "wanfadong_tagging_test.mp4",
                "video_cover_url": "http://p16-sign-sg.tiktokcdn.com/v0201/94ebe1a3e6734559a16f3e81c43787ec~tplv-noop.image?x-expires=1607259907&x-signature=Oy4%2FyYvkw%2FLTWz97pFCDx0Y6o4g%3D",
                "height": 720,
                "width": 1280,
                "bit_rate": 1594584,
                "create_time": "2020-11-16T08:19:57Z",
                "modify_time": "2020-11-16T08:19:57Z",
                "signature": "b24f08f569b73a33eec93edb8f4423e2",
                "duration": 5.312,
                "video_id": "v070331c0000bup3cb66kkoqaktb5psg",
				"material_id": "6895633277416374000",
            	"allowed_placements": [
                    "PLACEMENT_TOPBUZZ",
                    "PLACEMENT_TIKTOK",
                    "PLACEMENT_HELO",
                    "PLACEMENT_PANGLE"
            	],
            	"allow_download": true,
                "size": 1058804
            }
        ]
    },
    "request_id": "2020120607050201011517615618A693BE"
}
(/code);
```

---

## POST /v1.3/file/image/ad/upload/

**Upload an image** (docs: https://business-api.tiktok.com/portal/docs/upload-an-image-reference/v1.3)

Use this endpoint to upload pictures to the Asset Library and use the obtained image ID for creating ads.

Request timeout for this endpoint is 10s, and the transmission speed depends on network bandwidth. Please make sure that the file size is reasonable.

To learn about the steps of creating single image ads, refer to [Create single image ads](https://business-api.tiktok.com/portal/docs?id=1777633230937090).

To learn about the steps of creating Carousel Ads, refer to [Create Carousel Ads](https://business-api.tiktok.com/portal/docs?id=1766217791987713).

# Comparing v1.2 and v1.3
The following table outlines the differences between v1.2 and v1.3 endpoints.
|Changes|v1.2|v1.3|
|---|---|---|
|Endpoint path|/v1.2/file/image/ad/upload/|/v1.3/file/image/ad/upload/|
|Request parameter data type |`advertiser_id`: number|`advertiser_id`: string|
|New request parameters| / | `pre_review_enabled`<br>`pre_review_info`|
|New response parameters| / | `is_carousel_usable`<br>`pre_review_task_id`|
|Response parameter deprecated in v1.3| / | `id`: string |


# Request
**Endpoint** https://business-api.tiktok.com/open_api/v1.3/file/image/ad/upload/


**Method** POST

**Header**

|Field|Data Type|Description|
|---|---|---|
|Access-Token (required)|string|Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).|
|Content-Type (required)|string|Request message type.<br>Use `multipart/form-data` when upload_type is `UPLOAD_BY_FILE`. <br>Use `application/json` when upload_type is `UPLOAD_BY_URL` or `UPLOAD_BY_FILE_ID`.|


**Parameters**

|Field|Data Type|Description|
|---|---|---|
|advertiser_id (required)|string| Advertiser ID.|
|file_name |string |Image name. <br><br>Length limit: 1-100 characters.<br><br> The default value is the file name. If the final filename has more than 100 chars, it will be cut off. <br><br><p><span style="color:darkred"><b>Important</b></span>: Images under the same `advertiser_id` cannot have duplicated file names. You can call [/file/name/check/](https://ads.tiktok.com/marketing_api/docs?id=1759130033155073) to check whether the file name has been used.<br>If you get an error about duplicated file names, please rename the files or append timestamps to the original file names ( for example, in the format of `<original_filename>_<timestamp>`) , and upload the images again.|
|upload_type (required) |string|Image upload method. <br><br>Default value: `UPLOAD_BY_FILE`.<br><br>Enum values: `UPLOAD_BY_FILE`, `UPLOAD_BY_URL`, `UPLOAD_BY_FILE_ID`.|
|image_file {+Conditional}|file| Required when `upload_type` is `UPLOAD_BY_FILE`.<br><br>Image file.<br><br>Recommended settings: <ul><li>File size: within 50 MB.</li><li>Resolution: The total pixel count of the image, which is obtained by multiplying the width and height, should not exceed 3,686,400 pixels (1440 x 2560). For example, a resolution of 2400 x 1256 pixels is within the supported range, while a resolution of 3600 x 1256 pixels will result in an error.<br>To learn about the recommended image resolution for a certain use case, refer to the section "<a href="#item-link-Image resolution guidelines and use cases">Image resolution guidelines and use cases</a>".</li><li>File type: JPG, JPEG, or PNG</li></ul>|
|image_signature {+Conditional}|string| Required when `upload_type` is `UPLOAD_BY_FILE`.  <br> <br>MD5 of the image (used for server verification).|
|image_url {+Conditional}|url|Required when `upload_type` is `UPLOAD_BY_URL`. <br> <br>Image url address. Example: http://xxx.xxx. |
|file_id{+Conditional}| string | Required when `upload_type` is `UPLOAD_BY_FILE_ID`. <br> <br>The `file_id` of the image that you want to upload. <br>This field is for files that are uploaded to the file repository. <br><br>You can get `file_id` via the [Upload Files](https://ads.tiktok.com/marketing_api/docs?id=1737719988918274) endpoints. |
|pre_review_enabled|boolean|Whether to create a pre-review task for the image and any associated materials, which may include ad text and the landing page URL.<br><br>A pre-review task is a process initiated to evaluate and assess the compliance and quality of your creatives before they are used to create ads, ensuring that they meet TikTok advertising guidelines and standards.<br><br>Supported values: `true`, `false`.<br>Default value: `false`.<br><br>When you set this field to `true`, you need to specify `pre_review_info` simultaneously, and the response will include the `pre_review_task_id`.|
|pre_review_info {+Conditional}|object|Required when `pre_review_enabled` is set to `true`.<br><br>Additional details for the pre-review.|
| ↳ landing_page_url|string|The landing page URL to use in your ad.|
| ↳ ad_text|string|The ad text to use in your ad.<br><br>An ad text is shown to your audience as part of your ad creative, to deliver the message you intend to communicate to them.<br>Ad text must be 1-100 characters long and cannot contain emoji.<br>Each word in Chinese or Japanese counts as two characters, while each letter in English counts as one character.|
| ↳ location_codes {+Conditional}|string[]|Required when `pre_review_info` is specified.<br><br>The codes of the locations that you want to target.<br><br>Max size: 1.<br><br>For enum values, see [List of values for `location_codes` or `location_code`](https://business-api.tiktok.com/portal/docs/upload-an-image-reference/v1.3#anchor-2-1).<br><br>Example: `US`.|
| ↳ is_ecommerce|boolean|Whether the creatives are intended for use in E-commerce ads, including [GMV Max Campaigns](https://business-api.tiktok.com/portal/docs/create-gmv-max-campaigns/v1.3) and Catalog Ads.<br><br>Supported values: `true`, `false`.<br>Default value: `false`.|


### List of values for `location_codes` or `location_code`

The following table lists the enum values for the request parameter `location_codes` in [/creative/pre_review/task/create/](https://business-api.tiktok.com/portal/docs/create-a-creative-pre-review-task/v1.3), [/file/video/ad/upload/](https://business-api.tiktok.com/portal/docs/upload-a-video/v1.3), and [/file/image/ad/upload/](https://business-api.tiktok.com/portal/docs/upload-an-image-reference/v1.3), and the response parameter `location_code` in [/creative/pre_review/task/get/](https://business-api.tiktok.com/portal/docs/get-the-result-of-a-creative-pre-review-task/v1.3).

|Location Code|Description|
|---|---|
|`AD`|Andorra|
|`AE`|United Arab Emirates|
|`AG`|Antigua and Barbuda|
|`AI`|Anguilla|
|`AL`|Albania|
|`AO`|Angola|
|`AR`|Argentina|
|`AT`|Austria|
|`AU`|Australia|
|`AW`|Aruba|
|`AZ`|Azerbaijan|
|`BA`|Bosnia and Herzegovina|
|`BB`|Barbados|
|`BD`|Bangladesh|
|`BE`|Belgium|
|`BG`|Bulgaria|
|`BH`|Bahrain|
|`BL`|Saint Barthélemy|
|`BM`|Bermuda|
|`BO`|Bolivia|
|`BQ`|Caribbean Netherlands|
|`BR`|Brazil|
|`BS`|The Bahamas|
|`BY`|Belarus|
|`BZ`|Belize|
|`CA`|Canada|
|`CD`|Democratic Republic of the Congo|
|`CH`|Switzerland|
|`CL`|Chile|
|`CO`|Colombia|
|`CR`|Costa Rica|
|`CU`|Cuba|
|`CV`|Cabo Verde|
|`CW`|Curaçao|
|`CY`|Cyprus|
|`CZ`|Czech Republic|
|`DE`|Germany|
|`DJ`|Djibouti|
|`DK`|Denmark|
|`DM`|Dominica|
|`DO`|Dominican Republic|
|`DZ`|Algeria|
|`EC`|Ecuador|
|`EE`|Estonia|
|`EG`|Egypt|
|`ER`|Eritrea|
|`ES`|Spain|
|`FI`|Finland|
|`FO`|Faroe Islands|
|`FR`|France|
|`GB`|United Kingdom|
|`GD`|Grenada|
|`GE`|Georgia|
|`GF`|French Guiana|
|`GG`|Bailiwick of Guernsey|
|`GI`|Gibraltar|
|`GL`|Greenland|
|`GN`|Guinea|
|`GP`|Guadeloupe|
|`GQ`|Equatorial Guinea|
|`GR`|Greece|
|`GT`|Guatemala|
|`GW`|Guinea-Bissau|
|`HK`|Hong Kong|
|`HN`|Honduras|
|`HR`|Croatia|
|`HT`|Haiti|
|`HU`|Hungary|
|`ID`|Indonesia|
|`IE`|Ireland|
|`IL`|Israel|
|`IM`|Isle of Man|
|`IN`|India|
|`IQ`|Iraq|
|`IS`|Iceland|
|`IT`|Italy|
|`JE`|Jersey|
|`JM`|Jamaica|
|`JO`|Jordan|
|`JP`|Japan|
|`KE`|Kenya|
|`KH`|Cambodia|
|`KM`|Comoros|
|`KN`|Saint Kitts and Nevis|
|`KR`|South Korea|
|`KW`|Kuwait|
|`KY`|Cayman Islands|
|`KZ`|Kazakhstan|
|`LB`|Lebanon|
|`LC`|Saint Lucia|
|`LI`|Liechtenstein|
|`LK`|Sri Lanka|
|`LT`|Lithuania|
|`LU`|Luxembourg|
|`LV`|Latvia|
|`LY`|Libya|
|`MA`|Morocco|
|`MC`|Monaco|
|`MD`|Moldova|
|`ME`|Montenegro|
|`MF`|Saint Martin|
|`MK`|North Macedonia|
|`MM`|Myanmar|
|`MO`|Macao|
|`MQ`|Martinique|
|`MR`|Mauritania|
|`MS`|Montserrat|
|`MT`|Malta|
|`MX`|Mexico|
|`MY`|Malaysia|
|`MZ`|Mozambique|
|`NG`|Nigeria|
|`NI`|Nicaragua|
|`NL`|Netherlands|
|`NO`|Norway|
|`NP`|Nepal|
|`NZ`|New Zealand|
|`OM`|Oman|
|`PA`|Panama|
|`PE`|Peru|
|`PF`|French Polynesia|
|`PH`|Philippines|
|`PK`|Pakistan|
|`PL`|Poland|
|`PM`|Saint Pierre and Miquelon|
|`PR`|Puerto Rico|
|`PS`|Palestine|
|`PT`|Portugal|
|`PY`|Paraguay|
|`QA`|Qatar|
|`RO`|Romania|
|`RS`|Serbia|
|`RU`|Russia|
|`SA`|Saudi Arabia|
|`SD`|Sudan|
|`SE`|Sweden|
|`SG`|Singapore|
|`SI`|Slovenia|
|`SJ`|Svalbard and Jan Mayen|
|`SK`|Slovakia|
|`SM`|San Marino|
|`SO`|Somalia|
|`SS`|South Sudan|
|`ST`|Sao Tome and Principe|
|`SV`|El Salvador|
|`SX`|Sint Maarten|
|`SY`|Syria|
|`TC`|Turks and Caicos Islands|
|`TD`|Chad|
|`TF`|French Southern and Antarctic Lands|
|`TH`|Thailand|
|`TN`|Tunisia|
|`TR`|Turkey|
|`TT`|Trinidad and Tobago|
|`TW`|Taiwan (Province of China)|
|`UA`|Ukraine|
|`US`|United States|
|`UY`|Uruguay|
|`UZ`|Uzbekistan|
|`VC`|Saint Vincent and the Grenadines|
|`VE`|Venezuela|
|`VG`|British Virgin Islands|
|`VI`|Virgin Islands of the United States|
|`VN`|Vietnam|
|`YE`|Yemen|
|`ZA`|South Africa|


### Image resolution guidelines and use cases
The following table outlines the recommended resolutions for a certain use case. Ensure that the image file you upload has the recommended resolution for the specific use case to avoid any issues with image condensation or expansion (with potential loss of clarity) when delivered in ads.

| Use case | Recommended resolution |
|---|---|
| Pangle single image ads |<ul><li>720 pixels (width) x 1280 pixels (height) </li><li>1200 pixels (width) x 628 pixels (height)</li><li>640 pixels (width) x 640 pixels (height)</li><li>640 pixels (width) x 100 pixels (height)</li><li> 600 pixels (width) x 500 pixels (height) </li><li>640 pixels (width) x 200 pixels (height)|
| Global App Bundle single image ads | <ul><li>720 pixels (width) x 1280 pixels (height) </li><li>1200 pixels (width) x 628 pixels (height)</li><li>640 pixels (width) x 640 pixels (height)</li></ul>|
| Video cover (thumbnail) in TikTok single video ads | <ul><li>720 pixels (width) x 1280 pixels (height)</li><li>1280 pixels (width) x 720 pixels (height)</li><li>640 pixels (width) x 640 pixels (height)</li></ul> <br><p><span style="color:darkred"><b>Note</b></span>: The video cover resolution must match the video resolution and meet these requirements:<ul><li>Supported aspect ratios: 9:16, 16:9, or 1:1 </li><li>Resolution ranges per aspect ratio:<ul><li>9:16 aspect ratio: 960-3840 pixels (width) × 540-2160 pixels (height)</li><li>16:9 aspect ratio: 960-3840 pixels (width) × 540-2160 pixels (height) </li><li>1:1 aspect ratio: 640-1280 pixels (width) × 640-1280 pixels (height) </li></ul></li></ul>|


### Example
```xcodeblock
(code curl http)
curl --location --request POST 'https://business-api.tiktok.com/open_api/v1.3/file/image/ad/upload/' \
--header 'Access-Token: {{Access-Token}}' \
--header 'Content-Type: multipart/form-data' \
--form 'advertiser_id="{{advertiser_id}}"' \
--form 'file_name="{{file_name}}"' \
--form 'image_file=@"{{image_file}}"' \
--form 'image_signature="{{image_signature}}"'
(/code)
```

# Response

|Field|Data Type|Description|
|-|-|-|
|code |number|Response code. For the complete list of response codes and descriptions, see [Appendix - Return Codes](https://business-api.tiktok.com/portal/docs/return-codes-appendix/v1.3).|
|message |string|Response message. For details, see [Appendix - Return Codes](https://business-api.tiktok.com/portal/docs/return-codes-appendix/v1.3).|
|request_id|string| The log ID of the request, which uniquely identifies a request.|
|data|object|Returned data.|
| ↳ image_id |string|Image ID that is used to create ads. |
| ↳ material_id|string|Material ID.|
| ↳ is_carousel_usable | boolean | Whether the source of the image is valid for Carousel Ads. <br><br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>Due to the latency in writing the image data, this field might not be returned. In such situations, we recommend waiting for 10 seconds and then using the `image_id` returned from this endpoint with either [/file/image/ad/info/](https://business-api.tiktok.com/portal/docs?id=1740051721711618) or [/file/image/ad/search/](https://business-api.tiktok.com/portal/docs?id=1740052016789506) to retrieve the data.</li><li>To use an image in Carousel Ads, you need to ensure the value of this field is `true`, and the image meets the specifications requirements listed in [Create Carousel Ads-Steps-Create an ad](https://ads.tiktok.com/marketing_api/docs?id=1766217791987713).</li></ul>  |
| ↳ displayable |bool |Whether it can be displayed on the platform.|
| ↳ height |number|Image height.  |
| ↳ width |number|Image width.  |
| ↳ format|string|Image Format.  |
| ↳ image_url |string|Image URL, valid for an hour and needs to be re-acquired after expiration. |
| ↳ signature |string|MD5 of picture.|
| ↳ size |number|Image size in bytes.|
| ↳ file_name |string |Image name.|
| ↳ create_time |string |Creation time. UTC time. Format: 2020-06-10T07:39:14Z. <br><br><p><span style="color:darkred"><b>Note</b></span>: Due to the latency in writing the image data, this field might not be returned. In such situations, we recommend waiting for 10 seconds and then using the `image_id` returned from this endpoint with either [/file/image/ad/info/](https://business-api.tiktok.com/portal/docs?id=1740051721711618) or [/file/image/ad/search/](https://business-api.tiktok.com/portal/docs?id=1740052016789506) to retrieve the data.|
| ↳ modify_time |string |Modification time. UTC time. Format: 2020-06-10T07:39:14Z. <br><br><p><span style="color:darkred"><b>Note</b></span>: Due to the latency in writing the image data, this field might not be returned. In such situations, we recommend waiting for 10 seconds and then using the `image_id` returned from this endpoint with either [/file/image/ad/info/](https://business-api.tiktok.com/portal/docs?id=1740051721711618) or [/file/image/ad/search/](https://business-api.tiktok.com/portal/docs?id=1740052016789506) to retrieve the data.|
| ↳ pre_review_task_id|string|Returned only when `pre_review_enabled` in the request is set to `true`.<br><br>The ID of the pre-review task.<br><br>To obtain the result of the pre-review task, pass the value of this field to the `task_id` field in [/creative/pre_review/task/get/](https://business-api.tiktok.com/portal/docs/get-the-result-of-a-creative-pre-review-task/v1.3).|

### Example
```xcodeblock
(code curl http)
HTTPS/1.1 200 OK
{
    "code": 0,
    "message": "OK",
    "request_id": "{{request_id}}",
    "data": {
        "displayable": false,
        "width": 320,
        "signature": "{{signature}},
        "height": 640,
        "create_time": "{{create_time}}",
        "file_name": "{{file_name}}",
        "image_id": "{{image_id}}",
        "format": "jpeg",
        "modify_time": "{{modify_time}}",
        "image_url": "{{image_url}}",
        "is_carousel_usable": true,
        "material_id": "{{material_id}}",
        "size": 73398
    }
}
(/code)
```

