# akeyless.GatewayCreateProducerPostgreSQL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creationStatements** | **String** | PostgreSQL Creation statements | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**postgresqlDbName** | **String** | PostgreSQL DB Name | [optional] 
**postgresqlHost** | **String** | PostgreSQL Host | [optional] [default to &#39;127.0.0.1&#39;]
**postgresqlPassword** | **String** | PostgreSQL Password | [optional] 
**postgresqlPort** | **String** | PostgreSQL Port | [optional] [default to &#39;5432&#39;]
**postgresqlUsername** | **String** | PostgreSQL Username | [optional] 
**producerEncryptionKey** | **String** | Dynamic producer encryption key | [optional] 
**revocationStatement** | **String** | PostgreSQL Revocation statements | [optional] 
**secureAccessBastionIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Bastion | [optional] 
**secureAccessDbSchema** | **String** | The DB schema | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts) | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**ssl** | **Boolean** | Enable/Disable SSL [true/false] | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


