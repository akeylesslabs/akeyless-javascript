# akeyless.GatewayUpdateProducerHanaDb

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customUsernameTemplate** | **String** | Customize how temporary usernames are generated using go template | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**hanaDbname** | **String** | HanaDb Name | [optional] 
**hanadbCreateStatements** | **String** | HanaDb Creation statements | [optional] 
**hanadbHost** | **String** | HanaDb Host | [optional] [default to &#39;127.0.0.1&#39;]
**hanadbPassword** | **String** | HanaDb Password | [optional] 
**hanadbPort** | **String** | HanaDb Port | [optional] [default to &#39;443&#39;]
**hanadbRevocationStatements** | **String** | HanaDb Revocation statements | [optional] 
**hanadbUsername** | **String** | HanaDb Username | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessDbName** | **String** | The DB name (relevant only for DB Dynamic-Secret) | [optional] 
**secureAccessDbSchema** | **String** | The DB schema | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts) | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


