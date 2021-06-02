# akeyless.CreateAuthMethodHuawei

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**authUrl** | **String** | sts URL | [optional] [default to &#39;https://iam.myhwclouds.com:443/v3&#39;]
**boundDomainId** | **[String]** | A list of domain IDs that the access is restricted to | [optional] 
**boundDomainName** | **[String]** | A list of domain names that the access is restricted to | [optional] 
**boundIps** | **[String]** | A CIDR whitelist of the IPs that the access is restricted to | [optional] 
**boundTenantId** | **[String]** | A list of full tenant ids that the access is restricted to | [optional] 
**boundTenantName** | **[String]** | A list of full tenant names that the access is restricted to | [optional] 
**boundUserId** | **[String]** | A list of full user ids that the access is restricted to | [optional] 
**boundUserName** | **[String]** | A list of full user-name that the access is restricted to | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**name** | **String** | Auth Method name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


