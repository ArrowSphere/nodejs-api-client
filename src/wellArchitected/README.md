# Well Architected GraphQL Client

## General information

This client is useful to communicate with Well Architected GraphQL API.

## Usage

```ts
const client = new WellArchitectedGraphQLClient()
    .setUrl(PUBLIC_API_URL)
    .setToken(ACCESS_TOKEN)
    .setOptionsHeader(CUSTOM_HEADERS)
    .setOptions(OPTIONS);

const query: GetPartnerDataQuery = {
    getPartnerData: {
        __args: {
            searchBody: {
                filters: [{
                    names: ["pillar"],
                    values: [["cost"]]
                }],
                marketplace: ["FR"]
            }
        },
        checksAgg: {
            checks: {
                data: {
                    date: true,
                    score: true,
                    scoreUnit: true
                },
                last: {
                    date: true,
                    score: true,
                    scoreUnit: true
                },
                name: true,
                progression: true,
                reference: true,
                vendorCode: true
            }
        },
        endCustomersAgg: {
            customers: {
                customerRef: true,
                data: {
                    accounts: true,
                    date: true,
                    failed: true,
                    passed: true,
                    score: true,
                    scoreUnit: true,
                    subscriptionReferences: true,
                },
                last: {
                    accounts: true,
                    date: true,
                    failed: true,
                    passed: true,
                    score: true,
                    scoreUnit: true,
                    subscriptionReferences: true,
                },
                progression: true
            }
        },
        period: {
            from: true,
            to: true,
        },
        monthlyTrendAgg: {
            period: {
                from: true,
                to: true
            },
            score: true,
            scoreUnit: true,
            scores: {
                date: true,
                score: true,
                scoreUnit: true,
                severities: {
                    name: true,
                    value: true
                }
            }
        },
        scoresAgg: {
            last: {
                date: true,
                failed: true,
                passed: true,
                score: true,
                scorEUnit: true
            },
            progression: true,
            scores: {
                date: true,
                failed: true,
                passed: true,
                score: true,
                scorEUnit: true
            }
        },
        severitiesAgg: {
            severities: {
                data: {
                    date: true,
                    value: true
                },
                last: {
                    date: true,
                    value: true
                },
                name: true,
                progression: true
            }
        }
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

const client = new WellArchitectedGraphQLClient()
    .registerHttpExceptionHandler(handler);
```
