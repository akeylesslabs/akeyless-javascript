# akeyless.CreateAuthMethodOAuth2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**audience** | **String** | The audience in the JWT | [optional] 
**boundClientIds** | **[String]** | The clients ids that the access is restricted to | [optional] 
**boundIps** | **[String]** | A CIDR whitelist of the IPs that the access is restricted to | [optional] 
**issuer** | **String** | Issuer URL | [optional] 
**jwksUri** | **String** | The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server. | 
**name** | **String** | Auth Method name | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


