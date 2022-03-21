# akeyless.OIDCAccessRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedRedirectURIs** | **[String]** | Allowed redirect URIs after the authentication | [optional] 
**boundClaims** | [**[OIDCCustomClaim]**](OIDCCustomClaim.md) | The claims that login is restricted to. | [optional] 
**clientId** | **String** | Client ID | [optional] 
**clientSecret** | **String** | Client Secret | [optional] 
**isInternal** | **Boolean** | IsInternal indicates whether this is an internal Auth Method where the client has no control over it, or it was created by the client e.g - Sign In with Google will create an OIDC Auth Method with IsInternal&#x3D;true | [optional] 
**issuer** | **String** | Issuer URL | [optional] 
**uniqueIdentifier** | **String** | A unique identifier to distinguish different users | [optional] 


