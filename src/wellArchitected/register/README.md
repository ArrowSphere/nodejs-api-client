# Register Client

## Entities

### RegistrationLink Entity

| Field            | Type         | Example                                                                                                             | Description                                                                                                                                                         |
|------------------|--------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| extraParams      | ```Record<string, string>```| ```{templateUrl: "https://arrowsphere-test-public-api-well-architected-dev1.s3.eu-west-1.amazonaws.com/cloudformation/template.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=..."}```| Link to copy past to modify the template for Sustainability.|
| registrationLink | ```string``` | https://eu-west-1.console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/create/review?templateURL=... | One click link to either create a cloud formation on the customer's aws account or create an entreprise application on the customer's azure account (valid 6 hours) |
