# akeyless.CreateAuthMethodUniversalIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**denyInheritance** | **Boolean** | Deny from root to create children | [optional] 
**denyRotate** | **Boolean** | Deny from the token to rotate | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**name** | **String** | Auth Method name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**ttl** | **Number** | Token ttl | [optional] [default to 60]
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


