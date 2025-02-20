# akeyless.DynamicSecretCreateOracleDb

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dbServerCertificates** | **String** | (Optional) DB server certificates | [optional] 
**dbServerName** | **String** | (Optional) Server name for certificate verification | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**oracleHost** | **String** | Oracle Host | [optional] [default to &#39;127.0.0.1&#39;]
**oraclePassword** | **String** | Oracle Password | [optional] 
**oraclePort** | **String** | Oracle Port | [optional] [default to &#39;1521&#39;]
**oracleRevocationStatements** | **String** | Oracle Revocation statements | [optional] 
**oracleScreationStatements** | **String** | Oracle Creation statements | [optional] 
**oracleServiceName** | **String** | Oracle DB Name | [optional] 
**oracleUsername** | **String** | Oracle Username | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] [default to &#39;false&#39;]
**secureAccessHost** | **[String]** | Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts) | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


