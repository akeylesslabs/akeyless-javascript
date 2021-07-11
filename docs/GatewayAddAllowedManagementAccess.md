# akeyless.GatewayAddAllowedManagementAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowGwApi** | **Boolean** |  | [optional] 
**allowGwLogin** | **Boolean** |  | [optional] 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**subAdminAccessId** | **String** | SubAdmins to add | 
**subClaims** | **{String: String}** | key/val of sub claims, e.g group&#x3D;admins,developers | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 

