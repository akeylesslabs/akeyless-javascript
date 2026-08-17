# akeyless.AuthMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessDate** | **Date** |  | [optional] 
**accessDateDisplay** | **String** |  | [optional] 
**accessInfo** | [**AuthMethodAccessInfo**](AuthMethodAccessInfo.md) |  | [optional] 
**accountId** | **String** |  | [optional] 
**associatedGwIds** | **[Number]** |  | [optional] 
**authMethodAccessId** | **String** |  | [optional] 
**authMethodAdditionalData** | [**AuthMethodAdditionalData**](AuthMethodAdditionalData.md) |  | [optional] 
**authMethodId** | **Number** |  | [optional] 
**authMethodName** | **String** |  | [optional] 
**authMethodRolesAssoc** | [**[AuthMethodRoleAssociation]**](AuthMethodRoleAssociation.md) |  | [optional] 
**bookmarkLoginUrlTemplate** | **String** | BookmarkLoginURLTemplate is an OIDC login URL template for console bookmarks. SaaS-owned methods use {redirect_uri} for client substitution; AuthViaGw embeds the GW console callback. | [optional] 
**clientPermissions** | **[String]** |  | [optional] 
**creationDate** | **Date** |  | [optional] 
**deleteProtection** | **Boolean** |  | [optional] 
**description** | **String** |  | [optional] 
**expirationEvents** | [**[AuthExpirationEvent]**](AuthExpirationEvent.md) |  | [optional] 
**isApproved** | **Boolean** |  | [optional] 
**modificationDate** | **Date** |  | [optional] 
**uidExpirationEvents** | [**[UidExpirationEvent]**](UidExpirationEvent.md) |  | [optional] 


