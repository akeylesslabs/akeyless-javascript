# akeyless.GatewayUpdateProducerMySQL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dbServerCertificates** | **String** | (Optional) DB server certificates | [optional] 
**dbServerName** | **String** | (Optional) Server name for certificate verification | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this item [true/false] | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**mysqlDbname** | **String** | MySQL DB Name | [optional] 
**mysqlHost** | **String** | MySQL Host | [optional] [default to &#39;127.0.0.1&#39;]
**mysqlPassword** | **String** | MySQL Password | [optional] 
**mysqlPort** | **String** | MySQL Port | [optional] [default to &#39;3306&#39;]
**mysqlRevocationStatements** | **String** | MySQL Revocation statements | [optional] 
**mysqlScreationStatements** | **String** | MySQL Creation statements | [optional] 
**mysqlUsername** | **String** | MySQL Username | [optional] 
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Bastion | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts) | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**ssl** | **Boolean** | Enable/Disable SSL [true/false] | [optional] [default to false]
**sslCertificate** | **String** | SSL connection certificate | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


