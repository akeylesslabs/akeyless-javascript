# akeyless.CreateAuthMethodAWSIAM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**auditLogsClaims** | **[String]** | Subclaims to include in audit logs, e.g \&quot;--audit-logs-claims email --audit-logs-claims username\&quot; | [optional] 
**boundArn** | **[String]** | A list of full arns that the access is restricted to | [optional] 
**boundAwsAccountId** | **[String]** | A list of AWS account-IDs that the access is restricted to | 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**boundResourceId** | **[String]** | A list of full resource ids that the access is restricted to | [optional] 
**boundRoleId** | **[String]** | A list of full role ids that the access is restricted to | [optional] 
**boundRoleName** | **[String]** | A list of full role-name that the access is restricted to | [optional] 
**boundUserId** | **[String]** | A list of full user ids that the access is restricted to | [optional] 
**boundUserName** | **[String]** | A list of full user-name that the access is restricted to | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Auth Method description | [optional] 
**expirationEventIn** | **[String]** | How many days before the expiration of the auth method would you like to be notified. | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**gwBoundIps** | **[String]** | A CIDR whitelist with the GW IPs that the access is restricted to | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**name** | **String** | Auth Method name | 
**productType** | **[String]** | Choose the relevant product type for the auth method [sm, sra, pm, dp, ca] | [optional] 
**stsUrl** | **String** | sts URL | [optional] [default to &#39;https://sts.amazonaws.com&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**uniqueIdentifier** | **String** | A unique identifier (ID) value which is a \&quot;sub claim\&quot; name that contains details uniquely identifying that resource. This \&quot;sub claim\&quot; is used to distinguish between different identities. | [optional] 


