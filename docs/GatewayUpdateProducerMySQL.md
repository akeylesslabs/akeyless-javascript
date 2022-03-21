# akeyless.GatewayUpdateProducerMySQL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dbServerCertificates** | **String** | (Optional) DB server certificates | [optional] 
**dbServerName** | **String** | (Optional) Server name for certificate verification | [optional] 
**mysqlDbname** | **String** | MySQL DB Name | [optional] 
**mysqlHost** | **String** | MySQL Host | [optional] [default to &#39;127.0.0.1&#39;]
**mysqlPassword** | **String** | MySQL Password | [optional] 
**mysqlPort** | **String** | MySQL Port | [optional] [default to &#39;3306&#39;]
**mysqlScreationStatements** | **String** | MySQL Creation statements | [optional] 
**mysqlUsername** | **String** | MySQL Username | [optional] 
**name** | **String** | Producer name | 
**newName** | **String** | Producer name | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessHost** | **[String]** |  | [optional] 
**secureAccessWeb** | **Boolean** |  | [optional] 
**ssl** | **Boolean** | SSL connection mode | [optional] 
**sslCertificate** | **String** | SSL connection certificate | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


