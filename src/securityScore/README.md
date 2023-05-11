# Security Score GraphQL Client

## General information

This client is useful to communicate with Security Score GraphQL API.

## Usage

```ts
const client = new SecurityScoreGraphQLClient()
    .setUrl(PUBLIC_API_URL)
    .setToken(ACCESS_TOKEN)
    .setOptionsHeader(CUSTOM_HEADERS)
    .setOptions(OPTIONS);

const query: GetPartnerDataQuery = {
    getPartnerData: {
        __args: {
            searchBody: {
                marketplace: ["FR"]
            }
        },
        avgCurrentScore: true,
        period: {
            from: true,
            to: true,
        },
        endCustomersAgg: {
            customers: {
                customerRef: true,
                progression: true,
                data: {
                    date: true,
                    accounts: true,
                    avgCurrentScore: true,
                    failed: true,
                    passed: true,
                    subscriptionReferences: true,
                }
            }
        },
    }
};
const response = client.getPartnerData(query);
```

## Exception/Error Handling

To handle errors of the client, you can use an http exception handler.
ErrorHandler must implements interface `HttpExceptionHandler`.

```ts
class AnyExceptionHandler implements HttpExceptionHandler {}
const handler = new AnyExceptionHandler();

const client = new SecurityScoreGraphQLClient()
    .registerHttpExceptionHandler(handler);
```