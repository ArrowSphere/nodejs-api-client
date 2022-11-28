# Standards Client

## Entities

### Standards Entity

| Field     | Type                           | Example              | Description                      |
|-----------|--------------------------------|----------------------|----------------------------------|
| standards | ```Array<SecurityStandards>``` |                      | Security standards               |
| updatedAt | ```string```                   | 2021-12-06T18:00:00Z | The date of the last data update |

### Security Standards Entity

| Field     | Type         | Example                              | Description                                                                                                                    |
|-----------|--------------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| failed    | ```number``` | 24                                   | Number total of failed checks (optionnal, additional detailed informations, is not available for all security score providers) |
| name      | ```string``` | Trusted advisor                      | Standard name                                                                                                                  |
| passed    | ```number``` | 107                                  | Number total of valid checks (optionnal, additional detailed informations, is not available for all security score providers)  |
| reference | ```string``` | c1617b95-db6e-40f0-8aa2-ad8c72b53bfb | Standard reference                                                                                                             |
| score     | ```number``` | 0.816793893129771                    | Security score of the standard                                                                                                 |
| total     | ```number``` | 131                                  | Number total of checks in the standard                                                                                         |

### Checks Entity

| Field     | Type                        | Example              | Description                      |
|-----------|-----------------------------|----------------------|----------------------------------|
| checks    | ```Array<SecurityChecks>``` |                      | Security checks                  |
| updatedAt | ```string```                | 2021-12-06T18:00:00Z | The date of the last data update |

### Security Checks Entity

| Field       | Type                | Example                                                                                                                                                 | Description                                                                                                             |
|-------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| description | ```string```        | Checks buckets in Amazon Simple Storage Service (Amazon S3) that have open access permissions or allow access to any authenticated AWS user. ...        | Check description                                                                                                       |
| flagged     | ```number```        | 1                                                                                                                                                       | Number total of resources that failed the check                                                                         |
| isFailed    | ```boolean```       | true                                                                                                                                                    | true is the check is considered as failed                                                                               |
| metadata    | ```Array<string>``` | ["Region Name","Region API Parameter","Bucket Name","ACL Allows List","ACL Allows Upload/Delete","Status","Policy Allows Access","Ignored Bucket Name"] | Check metadata, the checked resources can be identified using this array                                                |
| name        | ```string```        | Amazon S3 Bucket Permissions                                                                                                                            | Check name                                                                                                              |
| processed   | ```number```        | 375                                                                                                                                                     | Number total of resources checked                                                                                       |
| reference   | ```string```        | a2cb10a4-3c97-4927-a56a-a70c6266033b                                                                                                                    | Check reference                                                                                                         |
| score       | ```number```        | 0.9973333333333333                                                                                                                                      | Security score of the check                                                                                             |
| severity    | ```string```        | CRITICAL                                                                                                                                                | Check severity, thrusted advisor checks don't have severity. Enum : ```CRITICAL```, ```HIGH```, ```LOW```, ```MEDIUM``` |

### Resources Entity

| Field       | Type                           | Example                                                                                                                                                 | Description                                                              |
|-------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| description | ```string```                   | Checks buckets in Amazon Simple Storage Service (Amazon S3) that have open access permissions or allow access to any authenticated AWS user. ...        | Resource check description                                               |
| metadata    | ```Array<string>```            | ["Region Name","Region API Parameter","Bucket Name","ACL Allows List","ACL Allows Upload/Delete","Status","Policy Allows Access","Ignored Bucket Name"] | Check metadata, the checked resources can be identified using this array |
| name        | ```string```                   | Amazon S3 Bucket Permissions                                                                                                                            | Resource check name                                                      |
| resources   | ```Array<SecurityResources>``` |                                                                                                                                                         | Security resources                                                       |
| updatedAt   | ```string```                   | 2021-12-06T18:00:00Z                                                                                                                                    | The date of the last data update                                         |


### Security Checks Entity

| Field  | Type         | Example                                                                      | Description                                                                                                                        |
|--------|--------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| status | ```string``` | FAILED                                                                       | Resource status. Enum : ```PASSED```, ```FAILED```, ```WARNING```, ```NOT_AVAILABLE```                                             |
| values | ```number``` | ["eu-west-1","eu-west-1","aws-test-angular4-front","No","No","Yellow","Yes"] | Resource metadata, the values of this array are indexed by the check metatada, this values allow resources identification / status |