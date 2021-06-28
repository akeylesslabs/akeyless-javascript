# akeyless.GatewayCreateProducerPostgreSQL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creationStatements** | **String** | PostgreSQL Creation statements | [optional] 
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**postgresqlDbName** | **String** | PostgreSQL DB Name | 
**postgresqlHost** | **String** | PostgreSQL Host | [optional] [default to &#39;127.0.0.1&#39;]
**postgresqlPassword** | **String** | PostgreSQL Password | 
**postgresqlPort** | **String** | PostgreSQL Port | [optional] [default to &#39;5432&#39;]
**postgresqlUsername** | **String** | PostgreSQL Username | 
**producerEncryptionKey** | **String** | Dynamic producer encryption key | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


