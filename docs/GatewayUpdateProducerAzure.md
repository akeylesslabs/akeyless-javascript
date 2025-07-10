# akeyless.GatewayUpdateProducerAzure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appObjId** | **String** | Azure App Object Id | [optional] 
**azureAdministrativeUnit** | **String** | Azure AD administrative unit (relevant only when azure-user-portal-access&#x3D;true) | [optional] 
**azureClientId** | **String** | Azure Client ID | [optional] 
**azureClientSecret** | **String** | Azure Client Secret | [optional] 
**azureTenantId** | **String** | Azure Tenant ID | [optional] 
**customUsernameTemplate** | **String** | Customize how temporary usernames are generated using go template | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**fixedUserClaimKeyname** | **String** | FixedUserClaimKeyname | [optional] [default to &#39;false&#39;]
**fixedUserOnly** | **Boolean** | Fixed user | [optional] [default to false]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic secret encryption key | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessUrl** | **String** | Destination URL to inject secrets | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to true]
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userGroupObjId** | **String** | User Group Object Id | [optional] 
**userPortalAccess** | **Boolean** | Azure User portal access | [optional] [default to false]
**userPrincipalName** | **String** | User Principal Name | [optional] 
**userProgrammaticAccess** | **Boolean** | Azure User programmatic access | [optional] [default to false]
**userRoleTemplateId** | **String** | User Role Template Id | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


