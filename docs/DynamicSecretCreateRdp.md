# akeyless.DynamicSecretCreateRdp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowUserExtendSession** | **Number** | AllowUserExtendSession | [optional] 
**customUsernameTemplate** | **String** | Customize how temporary usernames are generated using go template | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**fixedUserClaimKeyname** | **String** | For externally provided users, denotes the key-name of IdP claim to extract the username from (relevant only for fixed-user-only&#x3D;true) | [optional] [default to &#39;ext_username&#39;]
**fixedUserOnly** | **String** | Allow access using externally (IdP) provided username [true/false] | [optional] [default to &#39;false&#39;]
**itemCustomFields** | **{String: String}** | Additional custom fields to associate with the item | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**rdpAdminName** | **String** | RDP Admin Name | [optional] 
**rdpAdminPwd** | **String** | RDP Admin password | [optional] 
**rdpHostName** | **String** | Hostname | [optional] 
**rdpHostPort** | **String** | Port | [optional] [default to &#39;22&#39;]
**rdpUserGroups** | **String** | Groups | [optional] 
**secureAccessAllowExternalUser** | **Boolean** | Allow providing external user for a domain users | [optional] [default to false]
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessDelay** | **Number** | The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers) | [optional] 
**secureAccessRdGatewayServer** | **String** | RD Gateway server | [optional] 
**secureAccessRdpDomain** | **String** | Required when the Dynamic Secret is used for a domain user | [optional] 
**secureAccessRdpUser** | **String** | Override the RDP Domain username | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**warnUserBeforeExpiration** | **Number** | WarnBeforeUserExpiration | [optional] 


