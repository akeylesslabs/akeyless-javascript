# akeyless.GatewayCreateProducerPostgreSQL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creationStatements** | **String** | PostgreSQL Creation statements | [optional] 
**name** | **String** | Producer name | 
**postgresqlDbName** | **String** | PostgreSQL DB Name | [optional] 
**postgresqlHost** | **String** | PostgreSQL Host | [optional] [default to &#39;127.0.0.1&#39;]
**postgresqlPassword** | **String** | PostgreSQL Password | [optional] 
**postgresqlPort** | **String** | PostgreSQL Port | [optional] [default to &#39;5432&#39;]
**postgresqlUsername** | **String** | PostgreSQL Username | [optional] 
**producerEncryptionKey** | **String** | Dynamic producer encryption key | [optional] 
**revocationStatement** | **String** | PostgreSQL Revocation statements | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessDbSchema** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessHost** | **[String]** |  | [optional] 
**secureAccessWeb** | **Boolean** |  | [optional] 
**ssl** | **Boolean** | SSL connection mode | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


