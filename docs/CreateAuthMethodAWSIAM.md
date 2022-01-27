# akeyless.CreateAuthMethodAWSIAM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**boundArn** | **[String]** | A list of full arns that the access is restricted to | [optional] 
**boundAwsAccountId** | **[String]** | A list of AWS account-IDs that the access is restricted to | 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**boundResourceId** | **[String]** | A list of full resource ids that the access is restricted to | [optional] 
**boundRoleId** | **[String]** | A list of full role ids that the access is restricted to | [optional] 
**boundRoleName** | **[String]** | A list of full role-name that the access is restricted to | [optional] 
**boundUserId** | **[String]** | A list of full user ids that the access is restricted to | [optional] 
**boundUserName** | **[String]** | A list of full user-name that the access is restricted to | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**name** | **String** | Auth Method name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**stsUrl** | **String** | sts URL | [optional] [default to &#39;https://sts.amazonaws.com&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


