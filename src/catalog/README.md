# Catalog GraphQL Client

## General information

This client is useful to communicate with Catalog GraphQL API.

## Usage

```ts
const client = new CatalogGraphQLClient()
    .setUrl(PUBLIC_API_URL)
    .setToken(ACCESS_TOKEN)
    .setOptionsHeader(CUSTOM_HEADERS)
    .setOptions(OPTIONS);

const query: CatalogQuery = {...};
const response = client.findByQuery(query);
```

## Entities

### The type GetPaginatedProductsQuery

| Field      | Type                   | Example                                                                                                    | Description                                   |
|------------|------------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| __args     | ```QueryArguments```   | {paginate: {page: 1,perPage: 12}, searchBody: {filters: [{ name: 'vendor.name', value: ['Microsoft'] }]}}  | Optional Arguments of the GQL query           |
| filters    | ```FiltersSchema```    | {values: {count: true }}                                                                                   | Display filters that are used in the __args   |
| pagination | ```PaginationSchema``` | {totalPage: true,total: true}                                                                              | Display pagination that is used in the __args |
| products   | ```ProductSchema```    | {name: 'Office 365'}                                                                                       | Organic Catalog Fields to request             |
| topOffers  | ```ProductSchema```    | {name: 'Office 365'}                                                                                       | Promotional Offer Fields to request           |


## Exception/Error Handling

To handle errors of the client, you can use an http exception handler.
ErrorHandler must implements interface `HttpExceptionHandler`.

```ts
class AnyExceptionHandler implements HttpExceptionHandler {}
const handler = new AnyExceptionHandler();

const client = new CatalogGraphQLClient()
    .registerHttpExceptionHandler(handler);
```