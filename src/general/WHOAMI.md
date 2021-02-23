# Who Am I client

## General information

This endpoint allows the user to get information about himself.

## Entity

The endpoint is linked to the ```Whoami``` entity.

| Field             | Type           | Example                  | Description                    |
|-------------------|----------------|--------------------------|--------------------------------|
| companyName       | ```string```   | Wayne industries         | The name of the company        |
| addressLine1      | ```string```   | 1007 Mountain Drive      |                                |
| addressLine2      | ```string```   | Wayne Manor              |                                |
| zip               | ```string```   | 12345                    |                                |
| city              | ```string```   | Gotham City              |                                |
| countryCode       | ```string```   | US                       |                                |
| state             | ```string```   | NJ                       |                                |
| receptionPhone    | ```string```   | 1-800-555-1111           |                                |
| websiteUrl        | ```string```   | <https://www.dccomics.com> |                                |
| emailContact      | ```string```   | nobody@example.com       |                                |
| headcount         | ```string```   | null                     |                                |
| taxNumber         | ```string```   |                          |                                |
| reference         | ```string```   | XSP12345                 |                                |
| ref               | ```string```   | COMPANY12345             |                                |
| billingId         | ```string```   |                          |                                |
| internalReference | ```string```   |                          |                                |

## Usage

The "who am I" client is simply called ```WhoAmIClient```.
You can get it through the main entry point ```PublicApiClient``` and its method ```getWhoamiClient()```, or instanciate it directly:

```typescript
import { WhoAmIClient } from '@arrowsphere/api-client';

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API key in ArrowSphere';

const client = (new WhoAmIClient())
    .setUrl(URL)
    .setApiKey(API_KEY);

const whoAmI = await client.getWhoami();
console.log(whoAmI.getCompanyName());
```
