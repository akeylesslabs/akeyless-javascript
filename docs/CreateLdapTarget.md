# akeyless.CreateLdapTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessId** | **String** | Access ID | 
**bindDn** | **String** | Bind DN | 
**bindDnPassword** | **String** | Bind DN Password | 
**comment** | **String** | Comment about the target | [optional] 
**enableAnonymSearch** | **Boolean** | EnableAnonymousSearch | [optional] 
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**ldapCaCert** | **String** | CA Certificate File Content | [optional] 
**ldapUrl** | **String** | LDAP Server URL | 
**name** | **String** | Target name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**privateKey** | **String** | Base64-encoded ldap private key text | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**tokenExpiration** | **String** | Token expiration | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


