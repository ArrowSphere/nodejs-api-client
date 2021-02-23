# Check Domain client

## General information

Some vendors, like Microsoft, require a domain name to manage an account.
This endpoint performs vendor-specific checks to see if this domain name is available.

## Usage

The "Check Domain" client is simply called ```CheckDomainClient```.
You can get it through the main entry point ```PublicApiClient``` and its method ```getCheckDomainClient()```, or instanciate it directly:

```typescript
import { CheckDomainClient } from '@arrowsphere/client-api';

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API key in ArrowSphere';

const client = (new CheckDomainClient())
    .setUrl(URL)
    .setApiKey(API_KEY);

const isAvailable = await client.checkDomain('microsoft', 'www.example.com');
console.log(`This domain is ${(isAvailable ? '' : 'not ')} available.`);
```
