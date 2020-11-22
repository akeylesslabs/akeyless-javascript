# akeyless.CreateAuthMethodLDAP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**boundIps** | **[String]** | A CIDR whitelist of the IPs that the access is restricted to | [optional] 
**name** | **String** | Auth Method name | 
**publicKeyFilePath** | **String** | A public key generated for LDAP authentication method on Akeyless [RSA2048] | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


