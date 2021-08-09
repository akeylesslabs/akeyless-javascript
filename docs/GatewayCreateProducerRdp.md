# akeyless.GatewayCreateProducerRdp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixedUserOnly** | **String** | Fixed user | [optional] [default to &#39;false&#39;]
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**rdpAdminName** | **String** | RDP Admin Name | [optional] 
**rdpAdminPwd** | **String** | RDP Admin password | [optional] 
**rdpHostName** | **String** | Hostname | [optional] 
**rdpHostPort** | **String** | Port | [optional] [default to &#39;22&#39;]
**rdpUserGroups** | **String** | Groups | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessHost** | **[String]** |  | [optional] 
**secureAccessRdpDomain** | **String** |  | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


