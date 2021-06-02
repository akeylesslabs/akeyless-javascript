# akeyless.GatewayCreateProducerSnowflake

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | Account name | 
**dbName** | **String** | Database name | 
**gatewayUrl** | **String** | Gateway url | [optional] [default to &#39;http://localhost:8000&#39;]
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**role** | **String** | User role | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;24h&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 
**warehouse** | **String** | Warehouse name | [optional] 


