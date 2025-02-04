# Campaign Client

## General information

A campaign is the entity which holds information about the campaign.

## Entities

### Campaign

A Campaign page are managed by the `Campaign` entity.

| Field       | Type              | Example                | Description              |
|-------------|-------------------|------------------------|--------------------------|
| id          | ```number```      | 1                      | Contact id               |
| banners     | ```Banners[]```   |                        | Contact id               |
| category    | ```string```      | "BANNER"               | The Reseller             |
| status      | ```string```      | "open                  | Bugfix status            |
| createdAt   | ```string```      | "01 Jan 1970 00:00:00" | Contact first name       |
| deletedAt   | ```string```      | "01 Jan 1970 00:00:00" | Contact last name        |
| endDate     | ```string```      | "01 Jan 1970 00:00:00" | Contact email            |
| isActivated | ```boolean```     | true                   | Contact phone number     |
| landingPage | ```LandingPage``` |                        | Contact erp id           |
| name        | ```string```      | "Campaign Microsoft"   | Contact type             |
| reference   | ```string```      | "c925ec6e-e029-4146"   | Ownership campaign rules |
| rules       | ```Rules```       |                        | Contact status           |
| startDate   | ```string```      | "01 Jan 1970 00:00:00" | Campaign beginning date  |
| updatedAt   | ```string```      | "01 Jan 1970 00:00:00" | Campaign last edition    |
| weight      | ```number```      | 12                     | Campaign weight          |
 
### Banners

A Banners page are managed by the `Banners` entity.

| Field               | Type         | Example              | Description                  |
|---------------------|--------------|----------------------|------------------------------|
| id                  | ```number``` | 1                    | Banner id                    |
| backgroundImageUuid | ```string``` | "c925ec6e-e029-4146" | Background image id          |
| buttonPlacement     | ```string``` | "RIGHT"              | The button placement         |
| buttonText          | ```string``` | "Click here"         | Text displayed on the button |
| textColor           | ```string``` | "#119EOF"            | Text color (hexadecimal)     |
| type                | ```string``` | 'PICTURE'            | Banner Type                  |

### Rules

A Rules page are managed by the `Rules` entity.

| Field         | Type        | Example                         | Description         |
|---------------|-------------|---------------------------------|---------------------|
| endCustomers  | ```Array``` | ```["XSP45678", "XSP789"]```    | Limit the campaign  |
| locations     | ```Array``` | ```["MCP"]```                   | Location to display |
| marketplaces  | ```Array``` | ```["FR","US"]```               | Work group country  |
| resellers     | ```Array``` | ```["XSP12354"]```              | Limit the campaign  |
| roles         | ```Array``` | ```["EXT_MSP", "EXT_MSP_P" ]``` | Security roles      |
| subscriptions | ```Array``` | ```["MSCSP", "DDPCaaS" ]```     | Limit campaign      |


### LandingPageHeader

A LandingPageHeader page are managed by the `LandingPageHeader` entity.

| Field               | Type         | Example                     | Description                          |
|---------------------|--------------|-----------------------------|--------------------------------------|
| backgroundImageUuid | ```string``` | "0fed6621-fe0c-4290"        | Header background image UUID         |
| vendorLogoUuid      | ```string``` | "e174e2a2-7545-4ef1"        | vendor logo UUID                     |
| title               | ```string``` | "Microsoft Big campaign"    | Landing page header title            |
| backgroundColor     | ```string``` | "#FF00FF"                   | Landing page header background color |
| baseline            | ```string``` | "This page will explain..." | Landing page header baseline         |
| textColor           | ```string``` | "#FF00FF"                   | Text color                           |

### LandingPageBody

A LandingPageBody page are managed by the `LandingPageBody` entity.

| Field               | Type         | Example                              | Description                     |
|---------------------|--------------|--------------------------------------|---------------------------------|
| backgroundImageUuid | ```string``` | "6e3a0d7a-8651-4e47-89db"            | header background image UUID    |
| type                | ```string``` |  "PICTURE"                           | The body type                   |
| title               | ```string``` | "This is a body title"               | Landing page body title         |
| description         | ```string``` | "<p>This is a great description</p>" | Description of the landing page |
| videoUrl            | ```string``` | "https://.../"                       | Video link url                  |
| buttonText          | ```string``` | "Send form"                          | Text of the button              |
| contactEmail        | ```string``` | "firstname.name@mailprovider.com"    | Email address that will receive |

### LandingPageFooterFeature

A LandingPageFooterFeature page are managed by the `LandingPageFooterFeature` entity.

| Field       | Type         | Example                              | Description                |
|-------------|--------------|--------------------------------------|----------------------------|
| title       | ```string``` | "This is a great feature"            | Feature title              |
| description | ```string``` | "<p>This is a great description</p>" | description of the feature |
| icon        | ```string``` | "fa-icon"                            | Bootstrap icons            |
| size        | ```number``` | 4                                    | Number from 1 to 12 (md-4) |

### LandingPageFooter

A LandingPageFooter page are managed by the `LandingPageFooter` entity.

| Field           | Type                             | Example                  | Description        |
|-----------------|----------------------------------|--------------------------|--------------------|
| title           | ```string```                     | "Microsoft Big campaign" | Contact id         |
| backgroundColor | ```string```                     | "#FF00FF"                | Contact id         |
| buttonText      | ```string```                     | "Click here!"            | The Reseller       |
| buttonUrl       | ```string```                     | "https://.../"           | Contact first name |
| textColor       | ```string```                     | "#FF00FF"                | Contact first name |
| features        | ```LandingPageFooterFeature[]``` |                          | Contact first name |

### LandingPage

A LandingPage page are managed by the `LandingPage` entity.

| Field      | Type                     | Example                 | Description             |
|------------|--------------------------|-------------------------|-------------------------|
| url        | ```string```             | https://xxxxxxxxxx.com/ | Contact id              |
| header     | ```LandingPageHeader```  |                         | Landing page header     |
| body       | ```LandingPageBody```    |                         | Landing page body       |
| footer     | ```LandingPageFooter```  |                         | Landing page footer     |

### CampaignAssets

A CampaignAssets page are managed by the `CampaignAssets` entity.

| Field | Type          | Example                                 | Description |
|-------|---------------|-----------------------------------------|-------------|
| url   | ```string```  | https://xxxxxxxxxx.com/                 | Asset url   |
| uuid  | ```string```  | "af3ac6a6-12ab-4880-9dfe-52e734325444"  | Assets UUID |

### GetActiveCampaignAssets

A ActiveCampaignAssets page are managed by the `ActiveCampaignAssets` entity.

| Field      | Type                     | Example                 | Description             |
|------------|--------------------------|-------------------------|-------------------------|
| assets     | ```CampaignAssets[]```   |                         | Campaign assets array   |

### GetCampaignDetails

A CampaignDetails page are managed by the `CampaignDetails` entity.

| Field    | Type             | Example                 | Description |
|----------|------------------|-------------------------|-------------|
| campaign | ```Campaign```   |                         | Campaign    | 

### CampaignAggregation

A CampaignAggregation data are managed by the `CampaignAggregation` entity.

| Field        | Type               | Example                 | Description  |
|--------------|--------------------|-------------------------|--------------|
| categoryAgg  | ```CategoryList``` |                         | CategoryList | 

### CategoryList

A CategoryList data are managed by the `CategoryList` entity.

| Field       | Type                 | Example                 | Description  |
|-------------|----------------------|-------------------------|--------------|
| categories  | ```CategoryType[]``` |                         | CategoryType | 

### Category

A Category data are managed by the `Category` entity.

| Field    | Type            | Example | Description      |
|----------|-----------------|---------|------------------|
| dateAgg  | ```DateAgg[]``` |         | DateAgg          | 
| name     | string          | banner  | Name of category | 

### CategoryList

A CategoryList data are managed by the `CategoryList` entity.

| Field       | Type             | Example | Description |
|-------------|------------------|---------|-------------|
| categories  | ```Category[]``` |         | Category    | 

### DateAgg

A DateAgg data are managed by the `DateAgg` entity.

| Field  | Type                 | Example | Description                  |
|--------|----------------------|---------|------------------------------|
| count  | number               | 10      | Number of dates              | 
| dates  | ```CategoryDate[]``` |         | CategoryDate                 | 
| from   | string               | 2024-01 | Form when we start searching | 

### CategoryDate

A CategoryDate data are managed by the `CategoryDate` entity.

| Field | Type                 | Example | Description                  |
|-------|----------------------|---------|------------------------------|
| count | number               | 10      | Number of dates              | 
| date  | string               | 2024-01 | Form when we start searching | 

### CampaignAssetsUpload

A CampaignAssetsUpload data are managed by the `CampaignAssetsUpload` entity.

| Field  | Type                | Example | Description               |
|--------|---------------------|---------|---------------------------|
| assets | AssetsUploadType [] |         | Array of AssetsUploadType | 

### AssetsUploadType

A AssetsUploadType data are managed by the `AssetsUploadType` entity.

| Field | Type         | Example | Description     |
|-------|--------------|---------|-----------------|
| uuid  | string       | 123445  | asset reference |
| image | ImageType [] |         | ImageType       |

### ImageType

A ImageType data are managed by the `ImageType` entity.

| Field  | Type                      | Example            | Description                       |
|--------|---------------------------|--------------------|-----------------------------------|
| fields | { [key: string]: string } |                    | fields need by s3 to upload image |
| url    | string                    | https://s3.aws.com | url to be used to upload image    |

## Usage

It is possible to use the Campaign client to interact with the Campaign API.
You can get it through the main entry point `PublicApiClient` and its method `getLicensesClient()`, or instanciate it directly.

### getActiveCampaign

The `getActiveCampaign` method allows you to get all active campaigns.
This function is deprecated and will be removed in the future version. please use `getActiveCampaignV2` instead.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API';

const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .getActiveCampaign()
  .then((result) => console.log(result))
```


### getActiveCampaignV2

The `getActiveCampaignV2` method allows you to get all active campaigns.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API';

const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .getActiveCampaignV2()
  .then((result) => console.log(result))
```
### getCampaignAssets

The `getCampaignAssets` method allows you to get all assets of a campaign.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .getCampaignAssets('1234')
  .then((result) => console.log(result))
```

### getCampaignDetails

The `getCampaignDetails` method allows you to get the details of a campaign.
This function has been deprecated and will be removed in the future version. 
Please use `getCampaignDetailsV2` instead.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .getCampaignDetails('123')
  .then((result) => console.log(result))
```

### getCampaignDetailsV2

The `getCampaignDetailsV2` method allows you to get the details of a campaign.
This function has been deprecated and will be removed in the future version.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .getCampaignDetailsV2('123')
  .then((result) => console.log(result))
```

### postCampaignEmail

The `postCampaignEmail` method allows you to Send notify/email from landing page .

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .postCampaignEmail('123', {
    "application": "xcp",
    "metadata": {
      "domain": "subDomain.domain.www",
      "name": "Name"
    }
  })
  .then((result) => console.log(result))
```

### getCampaignList

The `getCampaignList` method allows you to get the list of campaigns.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .getCampaignList()
  .then((result) => console.log(result))
```

### createCampaign

The `createCampaign` method allows you to create a campaign.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .createCampaign({name: 'Campaign Microsoft', category: 'BANNER', status: 'open', isActivated: true, weight: 12})
  .then((result) => console.log(result))
```

### updateCampaign

The `updateCampaign` method allows you to update a campaign.
we must send the old data with the new change to update the campaign.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .updateCampaign({name: 'Campaign Microsoft', category: 'BANNER', status: 'open', isActivated: true, weight: 12})
  .then((result) => console.log(result))
```

### deleteCampaign

The `deleteCampaign` method allows you to delete a campaign.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .deleteCampaign('123')
  .then((result) => console.log(result))
```

### duplicateCampaign

The `duplicateCampaign` method allows you to duplicate a campaign.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .duplicateCampaign('123')
  .then((result) => console.log(result))
```

### getCampaignUploadAssetsForm

The `getCampaignUploadAssetsForm` method allows you to get the form to upload assets for a campaign.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .getCampaignUploadAssetsForm('123')
  .then((result) => console.log(result))
```

### deleteAssets

The `deleteAssets` method allows you to delete assets for a campaign.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .deleteAssets('123', 'assetUind')
  .then((result) => console.log(result))
```

### aggregationsCampaignsCategory

The `aggregationsCampaignsCategory` method allows you to get the aggregations of campaigns by category.

```typescript
import { PublicApiClient } from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API'
const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getCampaignClient()
  .aggregationsCampaignsCategory(['banner', 'release'])
  .then((result) => console.log(result))
```