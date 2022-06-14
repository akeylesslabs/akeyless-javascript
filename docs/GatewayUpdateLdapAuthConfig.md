# akeyless.GatewayUpdateLdapAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessId** | **String** | The access ID of the Ldap auth method | [optional] 
**bindDn** | **String** | Bind DN | [optional] 
**bindDnPassword** | **String** | Bind DN Password | [optional] 
**groupAttr** | **String** | Group Attr | [optional] 
**groupDn** | **String** | Group Dn | [optional] 
**groupFilter** | **String** | Group Filter | [optional] 
**ldapCaCert** | **String** | The CA Cert (in PEM format) to use to call into the ldap API server | [optional] 
**ldapEnable** | **String** | Enable Ldap | [optional] 
**ldapUrl** | **String** | LDAP Server URL, e.g. ldap://planetexpress.com:389 | [optional] 
**ldapAnonymousSearch** | **Boolean** | Ldap Anonymous Search | [optional] 
**signingKeyData** | **String** | The private key (in PEM format) associated with the public key defined in the Ldap auth | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userAttribute** | **String** | User Attribute | [optional] 
**userDn** | **String** | User DN | [optional] 


