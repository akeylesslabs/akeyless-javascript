# akeyless.AssocRoleAuthMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amName** | **String** | The auth method to associate | 
**caseSensitive** | **String** | Treat sub claims as case-sensitive [true/false] | [optional] [default to &#39;true&#39;]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**roleName** | **String** | The role to associate | 
**subClaims** | **{String: String}** | key/val of sub claims, e.g group&#x3D;admins,developers | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


