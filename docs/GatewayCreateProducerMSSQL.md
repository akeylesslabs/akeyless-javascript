# akeyless.GatewayCreateProducerMSSQL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteProtection** | **String** | Protection from accidental deletion of this item | [optional] 
**mssqlCreateStatements** | **String** | MSSQL Creation statements | [optional] 
**mssqlDbname** | **String** | MSSQL Name | [optional] 
**mssqlHost** | **String** | MSSQL Host | [optional] [default to &#39;127.0.0.1&#39;]
**mssqlPassword** | **String** | MSSQL Password | [optional] 
**mssqlPort** | **String** | MSSQL Port | [optional] [default to &#39;1433&#39;]
**mssqlRevocationStatements** | **String** | MSSQL Revocation statements | [optional] 
**mssqlUsername** | **String** | MSSQL Username | [optional] 
**name** | **String** | Producer name | 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessDbSchema** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessHost** | **[String]** |  | [optional] 
**secureAccessWeb** | **Boolean** |  | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


