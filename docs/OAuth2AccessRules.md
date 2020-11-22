# akeyless.OAuth2AccessRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **String** | The audience in the JWT. | [optional] 
**boundClaims** | [**[OAuth2CustomClaim]**](OAuth2CustomClaim.md) | The claims that login is restricted to. | [optional] 
**boundClientsId** | **[String]** | The clients ids that login is restricted to. | [optional] 
**issuer** | **String** | Issuer URL | [optional] 
**jwksUri** | **String** | The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server. | [optional] 


