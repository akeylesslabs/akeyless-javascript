# akeyless.DynamicSecretUpdateMsSql

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**mssqlCreateStatements** | **String** | MSSQL Creation statements | [optional] 
**mssqlDbname** | **String** | MSSQL Name | [optional] 
**mssqlHost** | **String** | MSSQL Host | [optional] [default to &#39;127.0.0.1&#39;]
**mssqlPassword** | **String** | MSSQL Password | [optional] 
**mssqlPort** | **String** | MSSQL Port | [optional] [default to &#39;1433&#39;]
**mssqlRevocationStatements** | **String** | MSSQL Revocation statements | [optional] 
**mssqlUsername** | **String** | MSSQL Username | [optional] 
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Bastion | [optional] 
**secureAccessDbSchema** | **String** | The DB schema | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts) | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


