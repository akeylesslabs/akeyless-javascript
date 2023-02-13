# akeyless.GatewayUpdateProducerAzure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appObjId** | **String** | Azure App Object Id | [optional] 
**azureClientId** | **String** | Azure Client ID | [optional] 
**azureClientSecret** | **String** | Azure Client Secret | [optional] 
**azureTenantId** | **String** | Azure Tenant ID | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this item [true/false] | [optional] 
**fixedUserClaimKeyname** | **String** | FixedUserClaimKeyname | [optional] [default to &#39;false&#39;]
**fixedUserOnly** | **Boolean** | Fixed user | [optional] [default to false]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Producer name | 
**newName** | **String** | Producer name | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to true]
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless Web Access Bastion | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless Web Access Bastion | [optional] [default to false]
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userGroupObjId** | **String** | User Group Object Id | [optional] 
**userPortalAccess** | **Boolean** | Azure User portal access | [optional] [default to false]
**userPrincipalName** | **String** | User Principal Name | [optional] 
**userProgrammaticAccess** | **Boolean** | Azure User programmatic access | [optional] [default to false]
**userRoleTemplateId** | **String** | User Role Template Id | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


