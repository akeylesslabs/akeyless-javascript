# akeyless.AuthMethodCreateKerberos

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**auditLogsClaims** | **[String]** | Subclaims to include in audit logs, e.g \&quot;--audit-logs-claims email --audit-logs-claims username\&quot; | [optional] 
**bindDn** | **String** |  | [optional] 
**bindDnPassword** | **String** |  | [optional] 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Auth Method description | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**groupAttr** | **String** |  | [optional] 
**groupDn** | **String** |  | [optional] 
**groupFilter** | **String** |  | [optional] 
**gwBoundIps** | **[String]** | A CIDR whitelist with the GW IPs that the access is restricted to | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**keytabFileData** | **String** |  | [optional] 
**keytabFilePath** | **String** |  | [optional] 
**krb5ConfData** | **String** |  | [optional] 
**krb5ConfPath** | **String** |  | [optional] 
**ldapAnonymousSearch** | **Boolean** |  | [optional] 
**ldapCaCert** | **String** |  | [optional] 
**ldapUrl** | **String** |  | [optional] 
**name** | **String** | Auth Method name | 
**productType** | **[String]** | Choose the relevant product type for the auth method [sm, sra, pm, dp, ca] | [optional] 
**subclaimsDelimiters** | **[String]** | A list of additional sub claims delimiters (relevant only for SAML, OIDC, OAuth2/JWT) | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**uniqueIdentifier** | **String** | A unique identifier (ID) value which is a \&quot;sub claim\&quot; name that contains details uniquely identifying that resource. This \&quot;sub claim\&quot; is used to distinguish between different identities. | [optional] 
**userAttribute** | **String** |  | [optional] 
**userDn** | **String** |  | [optional] 

