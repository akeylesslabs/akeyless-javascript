# akeyless.GatewayUpdateProducerLdap

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bindDn** | **String** | Bind DN | [optional] 
**bindDnPassword** | **String** | Bind DN Password | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this item | [optional] 
**externalUsername** | **String** | Fixed user | [optional] [default to &#39;false&#39;]
**ldapCaCert** | **String** | CA Certificate File Content | [optional] 
**ldapUrl** | **String** | LDAP Server URL | [optional] 
**name** | **String** | Producer name | 
**newName** | **String** | Producer name | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**tokenExpiration** | **String** | Token expiration | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userAttribute** | **String** | User Attribute | [optional] 
**userDn** | **String** | User DN | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


