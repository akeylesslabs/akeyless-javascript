# akeyless.AuthMethodCreateSAML

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**allowedClientType** | **[String]** | limit the auth method usage for specific client types [cli,ui,gateway-admin,sdk,mobile,extension] | [optional] 
**allowedRedirectUri** | **[String]** | Allowed redirect URIs after the authentication | [optional] 
**auditLogsClaims** | **[String]** | Subclaims to include in audit logs, e.g \&quot;--audit-logs-claims email --audit-logs-claims username\&quot; | [optional] 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Auth Method description | [optional] 
**expirationEventIn** | **[String]** | How many days before the expiration of the auth method would you like to be notified. | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**gatewayUrl** | **String** | Akeyless Gateway URL (Configuration Management port). Relevant only when working with Gateway mode | [optional] 
**gwBoundIps** | **[String]** | A CIDR whitelist with the GW IPs that the access is restricted to | [optional] 
**idpMetadataUrl** | **String** | IDP metadata url | [optional] 
**idpMetadataXmlData** | **String** | IDP metadata xml data | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**name** | **String** | Auth Method name | 
**productType** | **[String]** | Choose the relevant product type for the auth method [sm, sra, pm, dp, ca, ara] | [optional] 
**scimBearerAccessId** | **String** | Access ID of the API Key auth method the IdP uses as the SCIM bearer | [optional] 
**scimEnabled** | **String** | Enable SCIM provisioning for this auth method [true/false] | [optional] 
**scimEndpoint** | **String** | Where the IdP reaches the SCIM endpoint [public/private]. public is served by Akeyless, private by your own Akeyless Gateway | [optional] 
**scimGatewayUrl** | **String** | URL of the Akeyless Gateway that serves the SCIM endpoint to the IdP, for example https://gateway.example.com:8000. Required for the private endpoint | [optional] 
**subclaimsDelimiters** | **[String]** | A list of additional sub claims delimiters (relevant only for SAML, OIDC, OAuth2/JWT) | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**uniqueIdentifier** | **String** | A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \&quot;sub claim\&quot; that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization. | 
**useDedicatedSamlUrls** | **Boolean** | Use dedicated per-access-id SP URLs for login | [optional] 


