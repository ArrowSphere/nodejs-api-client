# Campaign Client

## General information

A campaign is the entity which holds information about the campaign.

## Entities

### Campaign

A Campaign page are managed by the `Campaign` entity.

| Field      | Type              | Example                | Description              |
|------------|-------------------|------------------------|--------------------------|
| id         | ```number```      | 1                      | Contact id               |
| banners    | ```Banners[]```   |                        | Contact id               |
| category   | ```string```      | "BANNER"               | The Reseller             |
| createdAt  | ```string```      | "01 Jan 1970 00:00:00" | Contact first name       |
| deletedAt  | ```string```      | "01 Jan 1970 00:00:00" | Contact last name        |
| endDate    | ```string```      | "01 Jan 1970 00:00:00" | Contact email            |
| isActivated| ```boolean```     | true                   | Contact phone number     |
| landingPage| ```LandingPage``` |                        | Contact erp id           |
| name       | ```string```      | "Campaign Microsoft"   | Contact type             |
| reference  | ```string```      | "c925ec6e-e029-4146"   | Ownership campaign rules |
| rules      | ```Rules```       |                        | Contact status           |
| startDate  | ```string```      | "01 Jan 1970 00:00:00" | Campaign beginning date  |
| updatedAt  | ```string```      | "01 Jan 1970 00:00:00" | Campaign last edition    |
| weight     | ```number```      | 12                     | Campaign weight          |
 
### Banners

A Banners page are managed by the `Banners` entity.

| Field               | Type         | Example             | Description                  |
|---------------------|--------------|---------------------|------------------------------|
| id                  | ```number``` | 1                   | Banner id                    |
| backgroundImageUuid | ```string``` | "c925ec6e-e029-4146"| Background image id          |
| buttonPlacement     | ```string``` | "RIGHT"             | The button placement         |
| buttonText          | ```string``` | "Click here"        | Text displayed on the button |
| textColor           | ```string``` | "#119EOF"           | Text color (hexadecimal)     |
| type                | ```string``` | 'PICTURE'           | Banner Type                  |

### Rules

A Rules page are managed by the `Rules` entity.

| Field        | Type        | Example                         | Description         |
|--------------|-------------|---------------------------------|-------------------- |
| endCustomers | ```Array``` | ```["XSP45678", "XSP789"]```    | Limit the campaign  |
| locations    | ```Array``` | ```["MCP"]```                   | Location to display |
| marketplaces | ```Array``` | ```["FR","US"]```               | Work group country  |
| resellers    | ```Array``` | ```["XSP12354"]```              | Limit the campaign  |
| roles        | ```Array``` | ```["EXT_MSP", "EXT_MSP_P" ]``` | Security roles      |
| subscriptions| ```Array``` | ```["MSCSP", "DDPCaaS" ]```     | Limit campaign      |


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

| Field           | Type          | Example                             | Description                          |
|-----------------|---------------|-------------------------------------|--------------------------------------|
| title           | ```string```  | "This is a great feature"           | Feature title                        |
| description     | ```string```  | "<p>This is a great description</p>"| description of the feature           |
| icon            | ```string```  | "fa-icon"                           | Bootstrap icons                      |
| size            | ```number```  | 4                                   | Number from 1 to 12 (md-4)           |

### LandingPageFooter

A LandingPageFooter page are managed by the `LandingPageFooter` entity.

| Field           | Type                             | Example                 | Description             |
|-----------------|----------------------------------|-------------------------|-------------------------|
| title           | ```string```                     |"Microsoft Big campaign" | Contact id              |
| backgroundColor | ```string```                     | "#FF00FF"               | Contact id              |
| buttonText      | ```string```                     | "Click here!"           | The Reseller            |
| buttonUrl       | ```string```                     | "https://.../"          | Contact first name      |
| textColor       | ```string```                     | "#FF00FF"               | Contact first name      |
| features        | ```LandingPageFooterFeature[]``` |                         | Contact first name      |

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