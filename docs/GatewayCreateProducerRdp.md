# akeyless.GatewayCreateProducerRdp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowUserExtendSession** | **Number** | AllowUserExtendSession | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this item [true/false] | [optional] 
**fixedUserOnly** | **String** | Allow access using externally (IdP) provided username [true/false] | [optional] [default to &#39;false&#39;]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Producer name | 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**rdpAdminName** | **String** | RDP Admin Name | [optional] 
**rdpAdminPwd** | **String** | RDP Admin password | [optional] 
**rdpHostName** | **String** | Hostname | [optional] 
**rdpHostPort** | **String** | Port | [optional] [default to &#39;22&#39;]
**rdpUserGroups** | **String** | Groups | [optional] 
**secureAccessAllowExternalUser** | **Boolean** | Allow providing external user for a domain users | [optional] [default to false]
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers) | [optional] 
**secureAccessRdpDomain** | **String** | Required when the Dynamic Secret is used for a domain user | [optional] 
**secureAccessRdpUser** | **String** | Override the RDP Domain username | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**warnUserBeforeExpiration** | **Number** | WarnBeforeUserExpiration | [optional] 


