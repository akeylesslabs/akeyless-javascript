# akeyless.AuthMethodUpdateOCI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**auditLogsClaims** | **[String]** | Subclaims to include in audit logs, e.g \&quot;--audit-logs-claims email --audit-logs-claims username\&quot; | [optional] 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Auth Method description | [optional] 
**expirationEventIn** | **[String]** | How many days before the expiration of the auth method would you like to be notified. | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**groupOcid** | **[String]** | A list of required groups ocids | 
**gwBoundIps** | **[String]** | A CIDR whitelist with the GW IPs that the access is restricted to | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**name** | **String** | Auth Method name | 
**newName** | **String** | Auth Method new name | [optional] 
**productType** | **[String]** | Choose the relevant product type for the auth method [sm, sra, pm, dp, ca] | [optional] 
**tenantOcid** | **String** | The Oracle Cloud tenant ID | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


