# akeyless.AuthMethodCreateOIDC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**allowedRedirectUri** | **[String]** | Allowed redirect URIs after the authentication | [optional] 
**audience** | **String** | Audience claim to be used as part of the authentication flow. In case set, it must match the one configured on the Identity Provider&#39;s Application | [optional] 
**auditLogsClaims** | **[String]** | Subclaims to include in audit logs, e.g \&quot;--audit-logs-claims email --audit-logs-claims username\&quot; | [optional] 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**clientId** | **String** | Client ID | [optional] 
**clientSecret** | **String** | Client Secret | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Auth Method description | [optional] 
**expirationEventIn** | **[String]** | How many days before the expiration of the auth method would you like to be notified. | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**gwBoundIps** | **[String]** | A CIDR whitelist with the GW IPs that the access is restricted to | [optional] 
**issuer** | **String** | Issuer URL | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**name** | **String** | Auth Method name | 
**productType** | **[String]** | Choose the relevant product type for the auth method [sm, sra, pm, dp, ca] | [optional] 
**requiredScopes** | **[String]** | RequiredScopes is a list of required scopes that the oidc method will request from the oidc provider and the user must approve | [optional] 
**requiredScopesPrefix** | **String** | RequiredScopesPrefix is a a prefix to add to all required-scopes when requesting them from the oidc server (for example, azures&#39; Application ID URI) | [optional] 
**subclaimsDelimiters** | **[String]** | A list of additional sub claims delimiters (relevant only for SAML, OIDC, OAuth2/JWT) | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**uniqueIdentifier** | **String** | A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \&quot;sub claim\&quot; that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization. | 


