# akeyless.GatewayCreateProducerAzure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appObjId** | **String** | Azure App Object Id | [optional] 
**clientId** | **String** | Azure Client ID | 
**clientSecret** | **String** | Azure Client Secret | 
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**tenantId** | **String** | Azure Tenant ID | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userGroupObjId** | **String** | User Group Object Id | [optional] 
**userPortalAccess** | **Boolean** | Azure User portal access | [optional] [default to false]
**userPrincipalName** | **String** | User Principal Name | [optional] 
**userProgrammaticAccess** | **Boolean** | Azure User programmatic access | [optional] [default to true]
**userRoleTemplateId** | **String** | User Role Template Id | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


